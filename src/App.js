import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
     <Timer startTime={1} endTime={20} />
    </div>
  );
}

export default App;
