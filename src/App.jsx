import './App.css';
import Dialogs from './components/dialog/Dialog';
import Header from './components/header/Header';
import Sender from './components/sender/Sender';

function App() {
  return (
    <div className="container">
      <Header />

      <Dialogs />

      <Sender />
    </div>
  );
}

export default App;
