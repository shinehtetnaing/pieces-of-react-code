import './App.css';
import { useState } from 'react';
import { RadioGroup, RadioOption } from './Radio';

function App() {
  const [selected, setSelected] = useState('');
  return (
    <div className="App">
      <h1>How did you hear about Little Lemon?</h1>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button>Submit</button>
    </div>
  );
}

export default App;
