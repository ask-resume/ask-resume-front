import { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <Button>Setting Turborepo</Button>
    </div>
  );
}

export default App;
