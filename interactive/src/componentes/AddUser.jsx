import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// handleDeleteUser
library.add(faTrash, faPlus);

export const AddUser = ({ handleAddUser }) => {
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userType, setUserType] = useState('');
    const [userEmail, setUserEmail] = useState('');
    // const [userImg, setUserImg] = useState('https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg');


    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleChangeRole = (event) => {
        setUserRole(event.target.value);
    };

    const handleChangePhone = (event) => {
        setUserPhone(event.target.value);
    };

    const handleChangeType = (event) => {
        setUserType(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setUserEmail(event.target.value);
    };

    // const handleChangeImg = (event) => {
    //     setUserImg(event.target.value);
    // };


    const handleSaveClick = () => {
        if (userName.trim().length > 0 && userEmail.trim().length > 0) {
            handleAddUser(userName, userRole, userPhone, userType, userEmail);
            setUserName('');
            setUserRole('');
            setUserPhone('');
            setUserType('');
            setUserEmail('');
            // setUserImg('');
        }
    }

    return (


        <div className="obj-wrapper">
            <div className="user-obj">
                <img
                    src={"https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"}
                    alt=""
                    // onChange={handleChangeImg}
                />
                <div className="info">
                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Nombre"
                        value={userName}
                        onChange={handleNameChange}
                    />

                    <input
                        type="phone"
                        className="input-user-edit"
                        placeholder="Celular"
                        value={userPhone}
                        onChange={handleChangePhone}
                    />

                    <input
                        type="email"
                        className="input-user-edit"
                        placeholder="Correo"
                        value={userEmail}
                        onChange={handleChangeEmail}
                    />

                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Cargo"
                        value={userRole}
                        onChange={handleChangeRole}
                    />
                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Tipo de usuario"
                        value={userType}
                        onChange={handleChangeType}
                    />
                </div>
            </div>

            <div className="user-obj-footer">
                <button className="borrar" style={{ fontSize: '24px', color: 'green' }} onClick={handleSaveClick}><FontAwesomeIcon icon={faPlus} /></button>
                {/* <a href={`/usuarios-editar`}>
                    <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
                </a> */}
            </div>
        </div>
    )
}