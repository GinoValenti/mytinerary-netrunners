import alertaReducer from "./alertaCityReducer";
import citiesReducer from "./citiesReducer"
import hotelsReducer from "./hotelsReducer";
import alertReducer from "./alertHotelReducer"
import showsReducer from "./showsReducer";
import itineraryReducer from "./itineraryReducer";
import userReducer from "./userReducer";
import reactionReducer from "./reactionReducer";

import commentReducer from "./commentReducer";


const rootReducer={
    hotels : hotelsReducer,
    shows: showsReducer,
    alerta: alertReducer,
    alerta: alertaReducer,
    itinerary: itineraryReducer,
    usuario:userReducer,
    cities : citiesReducer,
    user: userReducer,
    reaction: reactionReducer,
    comments:commentReducer
}

export default rootReducer;