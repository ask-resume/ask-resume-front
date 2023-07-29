import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

export interface DropdownProps {
  button: React.ReactNode;
  menu: DropdownMenuItemProps[];
}

export interface DropdownMenuItemProps {
  icon?: React.ReactNode;
  label: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

const Dropdown = ({ button, menu }: DropdownProps) => {
  // Dropdown portal
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  // Dropdown button
  const triggerRef = useRef<HTMLDivElement>(null);

  // Event Handler : Toggle or Close Dropdown menu
  const toggleDropdownMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setOpen(prev => !prev);
  };

  const closeDropdownMenu = () => {
    setOpen(false);
  };

  // useEffect : Render dropdown menu using react portal
  const removeContainer = (newContainer: HTMLDivElement) => {
    if (newContainer != null) {
      document.body.removeChild(newContainer);
      setContainer(null);
    }
  };

  useEffect(() => {
    let newContainer: any = null;

    if (open) {
      // Create portal root dynamically
      newContainer = document.createElement('div');
      document.body.appendChild(newContainer);
      setContainer(newContainer);
    }

    return () => {
      removeContainer(newContainer);
    };
  }, [open]);

  return (
    <>
      <div ref={triggerRef} className="_DROPDOWN_TRIGGER_" onMouseUp={toggleDropdownMenu}>
        {button}
      </div>
      {container
        ? createPortal(
            <DropdownMenu menu={menu} onClose={closeDropdownMenu} triggerRef={triggerRef} />,
            container,
          )
        : null}
    </>
  );
};

const DropdownMenu = ({
  menu,
  onClose,
  triggerRef,
}: Pick<DropdownProps, 'menu'> & {
  onClose: () => void;
  triggerRef: React.RefObject<HTMLDivElement>;
}) => {
  const dropdownMenuRef = useRef<HTMLUListElement>(null);

  // useEffect : Close <DropdownMenu /> when user clicks outside
  const handleClose = (event: MouseEvent) => {
    if (!dropdownMenuRef) return;

    if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClose);

    return () => {
      document.removeEventListener('mouseup', handleClose);
    };
  }, []);

  // useEffect : Position the dropdown menu appropriately when it is open
  useEffect(() => {
    // null check
    if (!triggerRef.current) return;
    if (!dropdownMenuRef.current) return;

    const BUTTON_MENU_GAP = 4;

    const trigger = triggerRef.current.getBoundingClientRect();
    const dropdownMenuRect = dropdownMenuRef.current.getBoundingClientRect();

    const dropdownMenu = {
      width: dropdownMenuRect.width,
      height: dropdownMenuRect.height,

      get top() {
        // Processed position-related values
        const requiredHeight = this.height + BUTTON_MENU_GAP;
        const expectedTop = trigger.bottom + BUTTON_MENU_GAP;
        const flippedTop = trigger.top - BUTTON_MENU_GAP - this.height;

        // Dropdown menu direction flags
        const isOverflowing = expectedTop + this.height > window.innerHeight;
        const hasEnoughTopSpace = requiredHeight < trigger.top;

        return isOverflowing && hasEnoughTopSpace ? flippedTop : expectedTop;
      },

      get left() {
        // Processed position-related values
        const requiredWidth = this.width + BUTTON_MENU_GAP;
        const expectedLeft = trigger.left;
        const flippedLeft = trigger.left - (this.width - trigger.width);

        // Dropdown menu direction flags
        const isOverflowing = expectedLeft + this.width > window.innerWidth;
        const hasEnoughLeftSpace = requiredWidth < trigger.left;

        return isOverflowing && hasEnoughLeftSpace ? flippedLeft : expectedLeft;
      },
    };

    // Set position styles
    dropdownMenuRef.current.style.position = 'absolute';
    dropdownMenuRef.current.style.top = `${dropdownMenu.top}px`;
    dropdownMenuRef.current.style.left = `${dropdownMenu.left}px`;
  }, []);

  if (!menu || menu.length === 0) return null;

  return (
    <ul ref={dropdownMenuRef} className="_DROPDOWN_MENU_">
      {menu.map((item, index) => (
        <MenuItem key={index} {...item} onClose={onClose} />
      ))}
    </ul>
  );
};

const MenuItem = ({
  icon,
  label,
  onClick,
  onClose,
}: DropdownMenuItemProps & {
  onClose: () => void;
}) => {
  const handleClick: React.MouseEventHandler<HTMLLIElement> = event => {
    if (onClick) onClick(event);
    onClose();
  };

  return (
    <li className="_DROPDOWN_MENU_ITEM_" onClick={handleClick}>
      <span>{icon}</span>
      <span>{label}</span>
    </li>
  );
};

export default Dropdown;
