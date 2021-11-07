import { useState } from 'react';
import './App.css';
import Dialogs from './components/dialog/Dialog';
import Header from './components/header/Header';
import Sender from './components/sender/Sender';
import { myAvatar } from './data';

function App() {
  const [message, addMessage] = useState(null);

  return (
    <div className="container">
      <Header />

      <Dialogs message={message}/>

      <Sender addMessage={addMessage} userAvatarUrl={myAvatar}/>
    </div>
  );
}

export default App;
