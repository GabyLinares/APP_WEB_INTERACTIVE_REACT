import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// handleDeleteUser
library.add(faTrash, faPlus);

export const AddLocation = ({ handleAddLocation }) => {
    const [locationName, setLocationName] = useState('');
    const [locationDetails, setLocationDetails] = useState('');
    const [locationProvider, setLocationProvider] = useState('');


    const handleNameChange = (event) => {
        setLocationName(event.target.value);
    };

    const handleChangeDetails = (event) => {
        setLocationDetails(event.target.value);
    };

    const handleChangeProvider = (event) => {
        setLocationProvider(event.target.value);
    };



    const handleSaveClick = () => {
        if (locationName.trim().length > 0) {
            handleAddLocation(locationName, locationDetails, locationProvider);
            setLocationName('');
            setLocationDetails('');
            setLocationProvider('');
            // setLocationImg('');
        }
    }

    return (


        <div className="obj-wrapper">
            <div className="location-obj">
                <div className="info">
                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Nombre"
                        value={locationName}
                        onChange={handleNameChange}
                    />

                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Detalles"
                        value={locationDetails}
                        onChange={handleChangeDetails}
                    />

                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Proveedor"
                        value={locationProvider}
                        onChange={handleChangeProvider}
                    />
                </div>
            </div>

            <div className="location-obj-footer">
                <button className="borrar" style={{ fontSize: '24px', color: 'green' }} onClick={handleSaveClick}><FontAwesomeIcon icon={faPlus} /></button>
                {/* <a href={`/lugares-editar`}>
                    <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
                </a> */}
            </div>
        </div>
    )
}