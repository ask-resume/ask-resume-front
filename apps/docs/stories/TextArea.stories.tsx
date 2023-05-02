import React from 'react';
import Textarea from 'shared-ui/src/components/Textarea';

export default {
  title: 'Component/Textarea',
  component: Textarea,
};

export const Default = () => {
  const [text, setText] = React.useState('');

  return (
    <div style={{ padding: 20, width: '500px' }}>
      <Textarea text={text} onChangeText={event => setText(event.target.value)} />
    </div>
  );
};

export const Height = () => {
  const [text, setText] = React.useState('');

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20, width: '500px' }}>
        <Textarea
          text={text}
          onChangeText={event => setText(event.target.value)}
          height={100}
          label={{ labelText: 'Height 100px' }}
        />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea
          text={text}
          onChangeText={event => setText(event.target.value)}
          height={200}
          label={{ labelText: 'Height 200px' }}
        />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea
          text={text}
          onChangeText={event => setText(event.target.value)}
          height={300}
          label={{ labelText: 'Height 300px' }}
        />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea
          text={text}
          onChangeText={event => setText(event.target.value)}
          height={400}
          label={{ labelText: 'Height 400px' }}
        />
      </div>

      <div style={{ padding: 20, width: '500px' }}>
        <Textarea
          text={text}
          onChangeText={event => setText(event.target.value)}
          height={500}
          label={{ labelText: 'Height 500px' }}
        />
      </div>
    </div>
  );
};

export const Error = () => {
  const [text, setText] = React.useState('');

  return (
    <div style={{ padding: 20, width: '500px' }}>
      <Textarea
        text={text}
        onChangeText={event => setText(event.target.value)}
        placeholder="The input value must be between 100 and 1,000 characters."
        error={{
          message: 'The input value must be between 100 and 1,000 characters.',
          regex: /^.{0,99}$|^.{1001,}$/,
        }}
      />
    </div>
  );
};
