import {createSlice} from "@reduxjs/toolkit";



const carSlice = createSlice({
        name: 'carSlice',
        initialState: {
            cars: []
        },
        reducers: {
            addCar: (state, actions) => {
                state.cars.push({
                    id:new Date().getTime(),
                    ...actions.payload.data
                })
            },
            deleteCar: (state, actions) => {
                state.cars = state.cars.filter(car => car.id !== actions.payload.id)
            }
        }
    }
)

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer