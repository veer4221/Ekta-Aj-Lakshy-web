import "./styles.css";
import {useState} from "react"
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import AddIcon from '@material-ui/icons/Add';

export default function App() {
  const [isOpen,setIsopen]=useState(false)
  return (
    <div className="App">
     <FloatingMenu
    slideSpeed={500}
    direction="right"
    spacing={8}
    isOpen={isOpen}
  >
    <MainButton

      backgroundColor="black"
      onClick={() => setIsopen(!isOpen)}
      size={56}
    />
     <ChildButton

      backgroundColor="white"
      size={40}
      onClick={() => console.log('First button clicked')}
    />
    <ChildButton

      backgroundColor="white"
      size={40}
    />
    <ChildButton

      backgroundColor="white"
      size={40}
    />
  </FloatingMenu>
    </div>
  );
}
