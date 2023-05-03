import React from 'react';
import Accordion, { AccordionItem } from 'shared-ui/src/components/Accordion';
import 'shared-ui/src/reset.scss';

export default {
  title: 'Component/Accodion',
  component: Accordion,
  subcomponents: { AccordionItem },
};

const example =
  'The Accordion component is a functional component that takes a single prop children and returns a ul element with the CSS class _ACCORDION_. This component serves as the container for AccordionItem components. The AccordionItem component is a functional component that takes three props - title, align, and children. It uses the useState hook to manage the state of whether the accordion item is open or closed. It also defines a handleClick function that toggles the state.';

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Accordion>
      <AccordionItem title="Title 1">{example}</AccordionItem>
      <AccordionItem title="Title 2">{example} </AccordionItem>
      <AccordionItem title="Title 3">{example} </AccordionItem>
    </Accordion>
  </div>
);

export const Align = () => (
  <div style={{ padding: 20 }}>
    <Accordion>
      <AccordionItem title="Align Left" align="left">
        {example}
      </AccordionItem>
      <AccordionItem title="Align Right" align="right">
        {example}
      </AccordionItem>
    </Accordion>
  </div>
);
