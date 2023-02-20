import 'simpledotcss';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import TextForm from './components/TextForm/TextForm';
import WordCompare from './components/WordCompare/WordCompare';
import Footer from './components/Footer/Footer';
import SkillGap from './components/SkillGap/SkillGap';

function App() {
  const [dataReceived, setDataReceived] = useState([]);
  const [skillGapDataReceived, setSkillGapDataReceived] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showWordCompare, setShowWordCompare] = useState(false);

  const handleShowWordCompare = () => {
    setShowWordCompare(true);
  };

  const handleShowSkillGap = () => {
    setShowWordCompare(false);
  };

  return (
    <div className='app'>
      <Header></Header>
      <main>
        <TextForm
          setDataReceived={setDataReceived}
          setErrorMessage={setErrorMessage}
          setSkillGapDataReceived={setSkillGapDataReceived}
        />

        {!(dataReceived.length === 0 && skillGapDataReceived.length === 0) && ( // If no data in both arrays, hid components
          <>
            <button
              className={`btn btn-secondary ${
                showWordCompare && `btn-secondary-active`
              }`}
              onClick={handleShowWordCompare}
            >
              Show Skills
            </button>
            <button
              className={`btn btn-secondary ${
                !showWordCompare && `btn-secondary-active`
              }`}
              onClick={handleShowSkillGap}
            >
              Show Recommended Skills
            </button>

            {showWordCompare ? (
              !(dataReceived.length === 0) && (
                <WordCompare skills={dataReceived} />
              )
            ) : (
              <SkillGap skillGapList={skillGapDataReceived} />
            )}
          </>
        )}

        {setErrorMessage && <div>{errorMessage}</div>}
      </main>
      <Footer />
    </div>
  );
}

export default App;

