import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {/* <h2>All Users: {users.length} </h2> */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Index</th>
                        <th>User Email</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                {
                           users.map((user, index)=><UserRow
                           key={user._id}
                           user={user}
                           index = {index}
                           refetch = {refetch}
                           ></UserRow>)
                       }
                </tbody>
            </Table>
        </div>
    );
};

export default Users;