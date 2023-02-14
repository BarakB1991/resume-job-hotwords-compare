import 'simpledotcss';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import TextForm from './components/TextForm/TextForm';
import WordCompare from './components/WordCompare/WordCompare';

function App() {
  const [dataReceived, setDataReceived] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className='app'>
      <Header></Header>
      <main>
        <TextForm
          dataReceived={dataReceived}
          setDataReceived={setDataReceived}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        {dataReceived && <WordCompare skills={dataReceived} />}
        {setErrorMessage && errorMessage}
      </main>
    </div>
  );
}

export default App;

