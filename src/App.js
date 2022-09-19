import "./App.css";
import Footer from "./Components/Shared/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Shared/Header/Header";
import OfferServices from "./Components/OfferServices/OfferServices";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AddCourse from "./Pages/Dashboard/AddCourse/AddCourse";
import AllCourses from "./Pages/CoursesPage/AllCourses/AllCourses";
import SingleCourse from "./Pages/CoursesPage/SingleCourse/SingleCourse";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Reviews from "./Pages/AllReviews/Reviews/Reviews";
import CourseDetails from "./Pages/CoursesPage/CourseDetails/CourseDetails";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import CheckOut from "./Pages/CheckOut/CheckOut/CheckOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./Pages/Dashboard/Orders/Orders";
import Users from "./Pages/Dashboard/Users/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="home" element={<Home></Home>} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          > 
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
            <Route path="myOrders" element={<Orders></Orders>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path="addCourse" element={<RequireAdmin><AddCourse></AddCourse></RequireAdmin>}></Route>
            <Route path="manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          </Route>

          <Route path="services" element={<OfferServices />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="allCourses" element={<AllCourses />} />
          <Route path="singleCourse" element={<SingleCourse />} />
          <Route
            path="courseDetails/:serviceId"
            element={
              <RequireAuth>
                <CourseDetails />
              </RequireAuth>
            }
          />
          <Route
            path="checkOut/:serviceId"
            element={
              <RequireAuth>
                <CheckOut />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
