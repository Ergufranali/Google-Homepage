import './App.css';
import LogoComponent from'./component/logo'
import Button from'./component/button'
import Lang from './component/lang'
import Wordbox from './component/wordbox'


export default function App() {
  return (
    <div className="App">
      <LogoComponent/>
      <Wordbox/>
      <Button/>
       <Lang language = {"English"}/>
    </div>
  );
}

