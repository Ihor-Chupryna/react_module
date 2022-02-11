import {useSelector} from "react-redux";

import {Car} from "../car/Car";

const Cars = () => {
    const {cars} = useSelector(state => state['carReducer'])
    console.log(cars)
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};