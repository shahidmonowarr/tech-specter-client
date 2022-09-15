import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="container">
      <h2>
        Welcome to Dashboard, <span style={{color:'#e64088'}}>{user.displayName}</span>.
      </h2>
      <div className="drone-media mx-5 mb-5">
        <img
          style={{width:'90%', height: 'auto'}}
          className="vert-move img-fluid"
          src="https://i.ibb.co/7k02WGG/6195525-3156627.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DashboardHome;
