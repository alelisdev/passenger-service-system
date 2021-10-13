const getters = {
    passengers(state) {
        return state.passengers;
    },
    passenger(state) {
        return state.passenger;
    },
    flightPassenger(state) {
        return state.flight_passenger;
    },
    upcomingFlights(state) {
        return state.upcoming_flights;
    },
    previousFlights(state) {
        return state.previous_flights;
    },
  };
  
  export default getters;