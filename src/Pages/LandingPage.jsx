import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Map from './Map';
import GridView from './GridView';


const LandingPage = () => {
    // const [data, setData] = useState([]);
    // useEffect( () => {
    //     fetch('https://github.com/turzacse/demoPropertise/blob/main/demoData')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // } ,[])

    const { selectedView } = useOutletContext();
    // console.log(selectedView);
    return (
        <div className="pt-10 ml-20">
            {selectedView === 'map' ? <Map /> : <GridView />}
        </div>
    );
}

export default LandingPage;