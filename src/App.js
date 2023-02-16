import './App.css';
import {useRef} from 'react';

function App() {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div className="App">
      <>
        <h1>Using useRef to access underlying DOM</h1>
        <input type='text' ref={formInputRef} />
        <button onClick={focusInput}>
          Focus Input
        </button>
      </>
    </div>
  );
}

export default App;
