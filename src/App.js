import  {React ,useCallback,useState} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph , setParagraph] = useState(false)
  const [allowToggle , setAllowToggle] = useState(false)

  console.log('App Running');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Click Here</Button>
    </div>
  );
}

export default App;
