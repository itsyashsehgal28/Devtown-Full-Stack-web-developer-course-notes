import './App.css'; // no need rn
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
        <p> Class Component : </p>
        <ClassComponent/>

        <br></br>

        <p> Functional Component : </p>
        <FunctionalComponent/>
    </div>
  );
}

export default App;
