import './App.css'; // no need rn
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import { useState } from 'react';
import { Routes , Route} from 'react-router-dom';
import BaseHoc from './hoc/BaseHoc'; // HOC layout 


function App() {
  const author = "yash"
  const [name , setName] = useState("DT")
  // this is a variable in the parent function we can access it in child through PROPS
  return (
    // <div className="App">
    //     <p> Class Component : </p>
    //     <ClassComponent/>

    //     <br></br>

    //     <p> Functional Component : </p>
    //     {/* <FunctionalComponent/> */}
    //     {/* this was just a function call  */}



    //     {/* <FunctionalComponent name="DevTown" age={20} author = {author}/> */}
    //     {/* so now basically ye hogyi function call with parameters  */}
    //     {/* name , age , author are parameters with values "DevTown" , 20 , "yash" */}
    //     {/* author = {author}  -----> parameter = {yash} */}

    //     <FunctionalComponent name={name} age={20} author = {author} setName = {setName}/>
    //     {/* this name is the state name and we will use props to send other info */}   
    // </div>

    <Routes>
      <Route path='/' element={<BaseHoc><ClassComponent/></BaseHoc>}/>
      <Route path='/FunctionalComponent' element={<BaseHoc><FunctionalComponent 
          name={name} 
          author={author} 
          setName={setName} 
          age={20} />
          </BaseHoc>}
      />
    </Routes>
  );
}

export default App;
