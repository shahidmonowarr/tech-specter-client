import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Shared/Header/Header';
import OfferServices from './Components/OfferServices/OfferServices';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddCourse from './Pages/Dashboard/AddCourse/AddCourse';
import AllCourses from './Pages/CoursesPage/AllCourses/AllCourses';
import SingleCourse from './Pages/CoursesPage/SingleCourse/SingleCourse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="home" element={<Home></Home>}/>
        <Route path="services" element={
          <RequireAuth>
            <OfferServices/>
          </RequireAuth>
        }/>
        <Route path="addCourse" element={
          <RequireAuth>
            <AddCourse/>
          </RequireAuth>
        }/>
        <Route path="allCourses" element={<AllCourses/>}/>
        <Route path="singleCourse" element={<SingleCourse/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer> 
      </BrowserRouter>
    </div>
  );
}

export default App;
