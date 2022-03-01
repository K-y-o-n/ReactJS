import Messege from './Components/Messege/Messege';
import './App.css';

const msg = "Мое первое приложение на ReactJS !"

function App() {
  return (
    <div className="App">
      <Messege msg={msg} />
    </div>
  );
}

export default App;
