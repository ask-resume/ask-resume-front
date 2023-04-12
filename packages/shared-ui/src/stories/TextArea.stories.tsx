import Textarea from '../components/Textarea';

import '../reset.scss';

export default {
  title: 'Component/Textarea',
  component: Textarea,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Textarea height={100} labelText="Input" />
    </div>
  );
};

export const Height = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <Textarea height={100} labelText="Input" />
      </div>
      <div style={{ padding: 20 }}>
        <Textarea height={200} labelText="Input" />
      </div>
      <div style={{ padding: 20 }}>
        <Textarea height={300} labelText="Input" />
      </div>
      <div style={{ padding: 20 }}>
        <Textarea height={400} labelText="Input" />
      </div>
      <div style={{ padding: 20 }}>
        <Textarea height={500} labelText="Input" />
      </div>
    </div>
  );
};
