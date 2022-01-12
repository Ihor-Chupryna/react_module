import {useEffect, useState} from "react";
import Spaceship from "../spaceship/Spaceship";

const Spaceships = () => {

const [spaceships, setSpaceships] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
          .then((response) => response.json())
          .then((val) => setSpaceships(val.filter(value => value.launch_year !== '2020')));
    }, [])

    return (
        <div>
            {spaceships.map(value => <Spaceship spaceship={value}/>)}
        </div>
    );
};

export default Spaceships;