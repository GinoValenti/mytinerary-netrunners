import hotelsReducer from "./hotelsReducer";
import alertReducer from "./alertHotelReducer"
import showsReducer from "./showsReducer";
const rootReducer={
    hotels : hotelsReducer,
    shows: showsReducer,
    alerta: alertReducer
}

export default rootReducer;