import './App.css'
import Button from "./assets/components/Button";
import NavBar from "./assets/components/NavBar";
import { TestList } from "./assets/components/TestList";
export default function App(){
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <h1>Mwenecho</h1>
        <Button></Button>
      </div>
      <TestList></TestList>
    </>
    
  );
}