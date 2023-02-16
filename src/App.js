import './App.css';
import * as React from 'react';

const Row = ({ children, spacing }) => {

  const childStyle = {
    marginLeft : `${spacing}px`,
  }
  return (
    <div className='Row'>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          //new style props that will merge the previous style.
          style : {
            ...child.props.style,
            //if the element is not a first child, then I'll also merge the child style object that contains the margin left.
            ...(index > 0 ? childStyle : {})
          }
        });
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default App;
