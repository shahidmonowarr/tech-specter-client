import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data =>{
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`);
            }
        })
    }
    return (
        <tr key={user._id} user={user}>
                                <td>{index + 1}</td>
                                <td>{user?.email}</td>
                                <td>{role !== 'admin' &&<Button className='px-3 btn-danger' onClick={makeAdmin}>Make Admin</Button>}</td>
                            </tr>
    );
};

export default UserRow;