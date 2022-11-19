import toDoReducer from "./toDoReducer"
import hotelReducer from "./hotelReducer"
const rootReducer={
    cities : toDoReducer,
    hotels : hotelReducer,
}

export default rootReducer;