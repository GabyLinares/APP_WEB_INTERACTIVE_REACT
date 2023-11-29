import React from 'react';
import { EventObj } from './Eventobj.jsx';
import { AddEvent } from './AddEvent.jsx';
// handleAddEvent, handleDeleteEvent

export const EventList = ({ events, handleAddEvent, handleDeleteEvent }) => {
    return (
        <div className="section-wrapper">
            {events?.map((event) => (
                <EventObj
                    id={event.id}
                    namedate={event.namedate}
                    organizerphone={event.organizerphone}
                    organizeremail={event.organizeremail}
                    details={event.details}
                    handleDeleteEvent={handleDeleteEvent}
                    />
            ))}
            <AddEvent handleAddEvent={handleAddEvent} />
        </div>
    )
}