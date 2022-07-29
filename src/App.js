import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Addemployee from './components/Addemployee';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Home></Home>}></Route>
        <Route path='/addemp' element={<Addemployee></Addemployee>}></Route>
      </Routes>
    </>
  );
}

export default App;
