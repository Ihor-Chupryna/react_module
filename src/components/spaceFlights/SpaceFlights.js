import {useEffect, useState} from "react";

import SpaceFlight from "../spaceFlight/SpaceFlight";

const SpaceFlights = () => {
    const [spaceFlights, setSpaceFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((response) => response.json())
            .then((values) => setSpaceFlights(values.filter(value => value.launch_year !== '2020')));
    }, []);

    return (
        <div>
            {spaceFlights.map(value => <SpaceFlight flight={value} key={value.flight_number}/>)}
        </div>
    );
};

export default SpaceFlights;