import React from 'react';
import { LocationObj } from './Locationobj.jsx';
import { AddLocation } from './AddLocation.jsx';
// handleAddLocation, handleDeleteLocation

export const LocationList = ({ locations, handleAddLocation, handleDeleteLocation }) => {
    return (
        <div className="section-wrapper">
            {locations?.map((location) => (
                <LocationObj
                    id={location.id}
                    name={location.name}
                    details={location.details}
                    provider={location.provider}
                    handleDeleteLocation={handleDeleteLocation}
                    />
            ))}
            <AddLocation handleAddLocation={handleAddLocation} />
        </div>
    )
}