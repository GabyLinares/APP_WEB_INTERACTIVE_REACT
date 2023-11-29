import React from 'react';
import { UserObj } from './Userobj.jsx';
import { AddUser } from './AddUser.jsx';
// handleAddUser, handleDeleteUser

export const UsersList = ({ users, handleAddUser, handleDeleteUser }) => {
    return (
        <div className="section-wrapper">
            {users?.map((user) => (
                <UserObj
                    id={user.id}
                    name={user.name}
                    role={user.role}
                    phone={user.phone}
                    type={user.type}
                    email={user.email}
                    imgUrl={'https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg'}
                    handleDeleteUser={handleDeleteUser}
                    />
            ))}
            <AddUser handleAddUser={handleAddUser} />
        </div>
    )
}