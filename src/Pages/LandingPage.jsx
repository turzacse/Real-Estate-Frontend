import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Map from './Map';
import GridView from './GridView';


const LandingPage = () => {

    const { selectedView } = useOutletContext();
    // console.log(selectedView);
    return (
        <div className=" md:ml-20 ml-4">
            {selectedView === 'map' ? <Map /> : <GridView />}
        </div>
    );
}

export default LandingPage;