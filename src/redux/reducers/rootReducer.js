import hotelsReducer from "./hotelsReducer";
import alertReducer from "./alertHotelReducer"
const rootReducer={
    hotels : hotelsReducer,
    alerta: alertReducer
}

export default rootReducer;