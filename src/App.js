import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm/TextForm';
import WordCompare from './components/WordCompare/WordCompare';

function App() {
  const [dataReceived, setDataReceived] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <main className='app'>
      <TextForm
        dataReceived={dataReceived}
        setDataReceived={setDataReceived}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      {dataReceived && <WordCompare skills={dataReceived} />}
      {setErrorMessage && errorMessage}
    </main>
  );
}

export default App;

