import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// handleDeleteUser
library.add(faTrash, faPlus);

export const AddEvent = ({ handleAddEvent }) => {
    const [eventNamedate, setEventNamedate] = useState('');
    const [eventOrganizerphone, setEventOrganizerphone] = useState('');
    const [eventOrganizeremail, setEventOrganizeremail] = useState('');
    const [eventDetails, setEventDetails] = useState('');


    const handleNamedateChange = (event) => {
        setEventNamedate(event.target.value);
    };

    const handleOrganizerphone = (event) => {
        setEventOrganizerphone(event.target.value);
    };

    const handleChangeOrganizeremail = (event) => {
        setEventOrganizeremail(event.target.value);
    };

    const handleChangeDetails = (event) => {
        setEventDetails(event.target.value);
    };

    const handleSaveClick = () => {
        if (eventNamedate.trim().length > 0 && ((eventOrganizerphone.trim().length > 0) || (eventOrganizeremail.trim().length > 0))) {
            handleAddEvent(eventNamedate, eventOrganizerphone, eventOrganizeremail, eventDetails);
            setEventNamedate('');
            setEventOrganizerphone('');
            setEventOrganizeremail('');
            setEventDetails('');
        }
    }

    return (

        <div className="obj-wrapper">
            <div className="location-obj">
                <div className="info">
                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Nombre/fecha"
                        value={eventNamedate}
                        onChange={handleNamedateChange}
                    />

                    <input
                        type="phone"
                        className="input-user-edit"
                        placeholder="Telefono del Organizador"
                        value={eventOrganizerphone}
                        onChange={handleOrganizerphone}
                    />

                    <input
                        type="email"
                        className="input-user-edit"
                        placeholder="Correo del Organizador"
                        value={eventOrganizeremail}
                        onChange={handleChangeOrganizeremail}
                    />

                    <input
                        type="text"
                        className="input-user-edit"
                        placeholder="Detalles"
                        value={eventDetails}
                        onChange={handleChangeDetails}
                    />
                </div>
            </div>

            <div className="event-obj-footer">
                <button className="borrar" style={{ fontSize: '24px', color: 'green' }} onClick={handleSaveClick}><FontAwesomeIcon icon={faPlus} /></button>
                {/* <a href={`/lugares-editar`}>
                    <button className="editar" style={{ fontSize: '24px', color: 'green' }}><FontAwesomeIcon icon={faEdit} /></button>
                </a> */}
            </div>
        </div>
    )
}