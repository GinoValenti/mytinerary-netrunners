<<<<<<< HEAD
import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"

const rootReducer={
    cities : toDoReducer,
=======
import hotelsReducer from "./hotelsReducer";
import alertReducer from "./alertHotelReducer"
import showsReducer from "./showsReducer";
const rootReducer={
    hotels : hotelsReducer,
    shows: showsReducer,
>>>>>>> 53270932bed350478ed469f239557668d45035a9
    alerta: alertReducer
}

export default rootReducer;