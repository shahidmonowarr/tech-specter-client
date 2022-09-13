import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res=> {
            console.log('res',res);
            if(res.status === 401 || res.status === 403){
                signOut(auth);
    localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json();
        })
        .then(data => {
            
            setOrders(data);
        });
        }
    },[user])
    return (
        <div>
            <h1>My orders {orders.length}</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Index</th>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Phone</th>
                        <th>Order Status</th>
                        <th>Approve</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{user?.displayName}</td>
                                <td>{order.service}</td>
                                <td>{order.phone}</td>
                                <td>{order.orderStatus}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;