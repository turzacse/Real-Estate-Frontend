import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Map from './Map';
import GridView from './GridView';

const LandingPage = () => {
    const { selectedView } = useOutletContext();
    console.log(selectedView);
    return (
        <div className="pt-10 ml-20">
            {selectedView === 'map' ? <Map /> : <GridView />}
        </div>
    );
}

export default LandingPage;