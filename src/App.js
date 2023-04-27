import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import OfferServices from "./Components/OfferServices/OfferServices";
import BackToTop from "./Components/Shared/BackToTop/BackToTop";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AboutUs from "./Optional/AboutUs";
import Faq from "./Optional/Faq";
import PrivacyPolicy from "./Optional/PrivacyPolicy";
import Reviews from "./Pages/AllReviews/Reviews/Reviews";
import {
  default as AvailableBlood,
  default as AvailableDonor
} from "./Pages/BloodsPage/AvailableDonor/AvailableDonor";
import BloodDonate from "./Pages/BloodsPage/BloodDonate/BloodDonate";
import BloodHome from "./Pages/BloodsPage/BloodHome/BloodHome";
import BloodPatient from "./Pages/BloodsPage/BloodPatient/BloodPatient";
import Guidelines from "./Pages/BloodsPage/Guidelines/Guidelines";
import CheckOut from "./Pages/CheckOut/CheckOut/CheckOut";
import AllCourses from "./Pages/CoursesPage/AllCourses/AllCourses";
import CourseDetails from "./Pages/CoursesPage/CourseDetails/CourseDetails";
import SingleCourse from "./Pages/CoursesPage/SingleCourse/SingleCourse";
import AddBlog from "./Pages/Dashboard/AddBlog/AddBlog";
import AddCourse from "./Pages/Dashboard/AddCourse/AddCourse";
import AddPlace from "./Pages/Dashboard/AddPlace/AddPlace";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AllTransaction from "./Pages/Dashboard/AllTransaction/AllTransaction";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import ManageCourses from "./Pages/Dashboard/ManageCourses/ManageCourses";
import UpdateCourse from "./Pages/Dashboard/ManageCourses/UpdateCourse";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import ManagePlaces from "./Pages/Dashboard/ManagePlaces/ManagePlaces";
import Orders from "./Pages/Dashboard/Orders/Orders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Users from "./Pages/Dashboard/Users/Users";
import AllBlogs from "./Pages/EducationBlogsPage/AllBlogs/AllBlogs";
import BlogDetails from "./Pages/EducationBlogsPage/BlogDetails/BlogDetails";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import PlaceBooking from "./Pages/PlaceBooking/PlaceBooking";
import AllPlaces from "./Pages/TravelPage/AllPlaces/AllPlaces";
import PlaceDetails from "./Pages/TravelPage/PlaceDetails/PlaceDetails";
import SinglePlace from "./Pages/TravelPage/SinglePlace/SinglePlace";

function App() {
  return (
    <div className="App">
      <BackToTop></BackToTop>
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
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users></Users>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addCourse"
              element={
                <RequireAdmin>
                  <AddCourse></AddCourse>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addPlace"
              element={
                <RequireAdmin>
                  <AddPlace></AddPlace>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addBlog"
              element={
                <RequireAdmin>
                  <AddBlog></AddBlog>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageOrders"
              element={
                <RequireAdmin>
                  <ManageOrders></ManageOrders>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageCourses"
              element={
                <RequireAdmin>
                  <ManageCourses></ManageCourses>
                </RequireAdmin>
              }
            ></Route>
            <Route path="manageCourses">
              <Route
                path="update/:courseId"
                element={
                  <RequireAdmin>
                    <UpdateCourse />
                  </RequireAdmin>
                }
              />
            </Route>
            <Route
              path="managePlaces"
              element={
                <RequireAdmin>
                  <ManagePlaces></ManagePlaces>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="allTransaction"
              element={
                <RequireAdmin>
                  <AllTransaction></AllTransaction>
                </RequireAdmin>
              }
            ></Route>
          </Route>

          <Route path="services" element={<OfferServices />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="availableBlood" element={<AvailableBlood />} />
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

          <Route path="allBlogs" element={<AllBlogs />} />
          <Route
            path="blogDetails/:blogId"
            element={
              <RequireAuth>
                <BlogDetails />
              </RequireAuth>
            }
          />
          <Route path="allPlaces" element={<AllPlaces />} />
          <Route path="singlePlace" element={<SinglePlace />} />
          <Route
            path="placeDetails/:serviceId"
            element={
              <RequireAuth>
                <PlaceDetails />
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
          <Route
            path="placeBooking/:serviceId"
            element={
              <RequireAuth>
                <PlaceBooking />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="blood" element={<BloodHome />} />
          <Route
            path="blood"
            element={
              <RequireAuth>
                <BloodHome />
              </RequireAuth>
            }
          >
            <Route index element={<AvailableDonor />}></Route>
            <Route path="availableDonor" element={<AvailableDonor />}></Route>
            <Route path="bloodDonate" element={<BloodDonate />}></Route>
            <Route path="bloodPatient" element={<BloodPatient />}></Route>
            <Route path="guidelines" element={<Guidelines />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
