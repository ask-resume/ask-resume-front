import Gnb from './Gnb';
import Footer from './Footer';
import styles from './index.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles._LAYOUT_}>
      <Gnb />
      <div className={styles._container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
