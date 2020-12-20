import logo from './logo.svg';
import { useCanvas } from './hooks/useCanvas';
import './App.css';

let mDown = false;

function App() {
  const [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight] = useCanvas();

  const handleMouseDown = (event) => {
    mDown = true;
  };

  const handleMouseUp = (event) => {
    mDown = false;
    setCoordinates([]);
  };

  const handleMouseMove = (event) => {
    if (mDown) {
      let currentTargetRect = event.currentTarget.getBoundingClientRect();
      const currentCoord = { x: event.pageX - currentTargetRect.left, y: event.pageY - currentTargetRect.top };
      setCoordinates([...coordinates, currentCoord]);
    }
  };

  const handleMouseOut = (event) => {
    if (mDown) {
      let currentTargetRect = event.currentTarget.getBoundingClientRect();
      const currentCoord = { x: event.pageX - currentTargetRect.left, y: event.pageY - currentTargetRect.top };
      setCoordinates([...coordinates, currentCoord]);
    }
    setCoordinates([]);
  };

  const handleMouseEnter = (event) => {
    if (mDown && event.buttons == 1) {
      let currentTargetRect = event.currentTarget.getBoundingClientRect();
      const currentCoord = { x: event.pageX - currentTargetRect.left, y: event.pageY - currentTargetRect.top };
      setCoordinates([...coordinates, currentCoord]);
    }
    else {
      mDown = false;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <canvas id="myCanvas"
            className="App-canvas"
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            onMouseEnter={handleMouseEnter}
          />
        </div>
      </header>
    </div>
  );


}

export default App;
