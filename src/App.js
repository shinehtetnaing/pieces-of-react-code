import './App.css';
import { useState, useEffect } from 'react';

// with part of the name is general name convention
const withMousePosition = (WrappedComponent) => {
  return (props) => {

    const [mousePositioin, setMousePosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return (
      <WrappedComponent {...props} mousePositioin={mousePositioin} />
    )
  }
}

const PanelMouseLogger = ({ mousePositioin }) => {
  if (!mousePositioin) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse Position :</p>
      <div className="Row">
        <span>x: {mousePositioin.x}</span>
        <span>y: {mousePositioin.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePositioin }) => {
  if (!mousePositioin) {
    return null;
  }
  return (
    <p>
      ({mousePositioin.x}, {mousePositioin.y})
    </p>
  );
};

//to enhence components
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
