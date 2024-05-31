import React from 'react';
import GridView from "./Pages/GridView";
import Map from "./Pages/Map";
import { useOutletContext } from 'react-router-dom';

function App() {
    const { selectedView } = useOutletContext();
    console.log(selectedView);
    return (
        <div className="pt-10 ml-20">
            {selectedView === 'map' ? <Map /> : <GridView />}
        </div>
    );
}

export default App;
