import Link from 'next/link';
import Text from 'shared-ui/src/components/Text';
import { Logo } from 'common/components/Icon';
import styles from '../index.module.scss';

const HomeRouter = () => {
  return (
    <Link className={styles._logo} href="/">
      <Logo />
      <div className={styles.title}>
        <Text variant="h4">AskResume</Text>
      </div>
    </Link>
  );
};

export default HomeRouter;
