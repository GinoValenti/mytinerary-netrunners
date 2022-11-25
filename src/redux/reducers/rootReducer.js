import alertaReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import hotelsReducer from "./hotelsReducer";
import alertReducer from "./alertHotelReducer"
import showsReducer from "./showsReducer";
import itineraryReducer from "./itineraryReducer";
import userReducer from "./userReducer";



const rootReducer={
    hotels : hotelsReducer,
    shows: showsReducer,
    alerta: alertReducer,
    alerta: alertaReducer,
    cities : toDoReducer,
    itinerary: itineraryReducer,
    usuario:userReducer
}

export default rootReducer;