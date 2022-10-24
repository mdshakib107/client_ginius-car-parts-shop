import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Authentication/Login/Login'
import SingUp from './Pages/Authentication/Registration/SingUp'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/ServicesPages/Services/Services';
import Exparts from './Pages/ExpartPages/Experts/Experts';
import ServicesDeatails from './Pages/ServicesPages/ServicesDetails/ServicesDeatails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequareAuth from './Pages/Authentication/RequareAuth/RequareAuth';
import ChackOut from './Pages/ChackOut/ChackOut';
import About from './Pages/About/About';
import AddService from './Pages/Dashboard/Admin/AddService/AddService';
import ManageServices from './Pages/Dashboard/Admin/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}>  </Route>
        <Route path="/service/:serviceId" element={<ServicesDeatails></ServicesDeatails>}></Route>
        <Route path='/chackout' element={
          <RequareAuth>
            <ChackOut></ChackOut>
          </RequareAuth>
        }></Route>
        <Route path='/manageservices' element={
          <RequareAuth>
            <ManageServices></ManageServices>
          </RequareAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequareAuth>
            <AddService></AddService>
          </RequareAuth>
        }></Route>
        <Route path="/exparts" element={<Exparts></Exparts>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<SingUp></SingUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
