import alertaReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import hotelsReducer from "./hotelsReducer";
import alertReducer from "./alertHotelReducer"
import showsReducer from "./showsReducer";
import itineraryReducer from "./itineraryReducer";



const rootReducer={
    hotels : hotelsReducer,
    shows: showsReducer,
    alerta: alertReducer,
    alerta: alertaReducer,
    cities : toDoReducer,
    itinerary: itineraryReducer
}

export default rootReducer;