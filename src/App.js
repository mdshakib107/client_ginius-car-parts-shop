import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Authentication/Login/Login'


function App() {
  return (
    <div className="App">
      <h1 >This is Card parts SHop Site ok!!!!</h1>
      <h2>I will working on this Project sooon !!!!</h2>
   
   <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
   </Routes>
    </div>
  );
}

export default App;
