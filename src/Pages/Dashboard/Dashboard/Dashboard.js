import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin/useAdmin';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 pt-5">
                <Link to='/' style={{ textDecoration: "none" }}>Home</Link>
                <br/>
                <Link to='/addReview' style={{ textDecoration: "none" }}>Add Review</Link>
                   <br/>     
                {!admin && <Link to='/dashboard/myOrders' style={{ textDecoration: "none" }}>My Orders</Link>}
                
                {admin && <Link to='/dashboard/users' style={{ textDecoration: "none" }}>All Users</Link>}
                <br/>

                    {/* {admin ? (<div className="my-5">
                        <Link to={`${url}/manageOrders`} style={{ textDecoration: "none" }}>Manage all Orders</Link>
                        <br />
                        <Link to={`${url}/addProducts`} style={{ textDecoration: "none" }}>Add Products</Link>
                        <br />
                        <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}>Make Admin</Link>
                        <br />
                        <Link to={`${url}/manageProducts`} style={{ textDecoration: "none" }}>Manage Products</Link>
                        <br />
                        {user?.email &&
                            <Link to="" className="pb-2" style={{ textDecoration: "none" }} onClick={logOut} >Logout</Link>
                        }
                    </div>)
                        : (<div className="my-5">
                            <Link to={`${url}/pay`} style={{ textDecoration: "none" }}>Pay</Link>
                            <br />
                            <Link to={`${url}/myOrder`} style={{ textDecoration: "none" }}>My Orders</Link>
                            <br />
                            <Link to={`${url}/addReview`} style={{ textDecoration: "none" }}>Review</Link>
                            <br />
                            {user?.email &&
                                <Link to="" className="pb-2" style={{ textDecoration: "none" }} onClick={logOut} >Logout</Link>
                            }
                        </div>)} */}

                </div>
                <div className="col-md-10">
                        <h1 className='fw-bolder shadow-sm'>Dashboard</h1>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;