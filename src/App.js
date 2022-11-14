import './App.css';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Tweet from './pages/Tweet';

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Card username="Sarang" desc="something"/> */}
      <Profile />
      <Tweet />
    </div>
  );
}

export default App;


