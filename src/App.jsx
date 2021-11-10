import { useEffect, useState } from 'react';
import './App.css';
import Dialogs from './components/dialog/Dialog';
import Header from './components/header/Header';
import Sender from './components/sender/Sender';
import { myAvatar } from './data';
import { getTheme, setTheme } from './helpars/theme';
import { AppContext } from './context';

function App() {
  const [message, addMessage] = useState(null);
  const [theme, changeTheme] = useState(getTheme());

  useEffect(() => setTheme(theme), [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}>
      <div className="container">
        <Header />

        <Dialogs message={message}/>

        <Sender addMessage={addMessage} userAvatarUrl={myAvatar}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
