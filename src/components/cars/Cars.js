import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../car/Car";
import {getAllCars} from "../../store";

const Cars = () => {
   const {cars, status, error} = useSelector(state => state['carReducer'])
    console.log(cars)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllCars())
    }, [dispatch])

    return (
        <div>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};