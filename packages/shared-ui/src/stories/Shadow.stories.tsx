import Text from '../components/Text';
import '../reset.scss';
import '../index.scss';
import { ShadowMap } from '../config/colorMap';

export default {
  title: 'Styleguide/Shadow',
};

export const Shadow = () => (
  <>
    <ShadowBox name="one" />
    <ShadowBox name="two" />
    <ShadowBox name="three" />
    <ShadowBox name="four" />
    <ShadowBox name="five" />
    <ShadowBox name="six" />
    <ShadowBox name="seven" />
    <ShadowBox name="inner" />
  </>
);

interface ShadowBox {
  name: ShadowMap;
}

const ShadowBox = ({ name }: ShadowBox) => (
  <div
    style={{
      boxShadow: ShadowMap[name],
      padding: '2rem',
      margin: '1rem',
      backgroundColor: '#fff',
      border: '1px solid #ced4da',
      overflow: 'hidden',
    }}
  >
    <Text size="small" weight="medium" variant="block" style={{ padding: '4px 0' }}>
      {name}
    </Text>
  </div>
);
