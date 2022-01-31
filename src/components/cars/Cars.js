import {Car} from "../car/Car";
import {useSelector} from "react-redux";

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