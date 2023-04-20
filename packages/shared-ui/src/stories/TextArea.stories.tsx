import React from 'react';
import Textarea from '../components/Textarea';

export default {
  title: 'Component/Textarea',
  component: Textarea,
};

export const Default = () => {
  return (
    <div style={{ padding: 20, width: '500px' }}>
      <Textarea height={100} labelText="Input" />
    </div>
  );
};

export const Height = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20, width: '500px' }}>
        <Textarea height={100} labelText="Height 100px" />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea height={200} labelText="Height 200px" />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea height={300} labelText="Height 300px" />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea height={400} labelText="Height 400px" />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea height={500} labelText="Height 500px" />
      </div>
    </div>
  );
};
