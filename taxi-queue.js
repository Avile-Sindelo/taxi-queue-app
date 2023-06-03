/*************** PSUEDOCODE ******************
 * 
 * Create a state variable with a passenger and taxi counts
 * In the joinQueue function, increment the passenger count
 * In the leaveQueue function, 
 * 		Make sure the passenger count is not less than zero
 * 			Decrement the passenger count
 * In the joinTaxiQueue function, increment the taxi count of the state
 * In the queueLength function, return the passenger count from the state
 * In the taxiQueueLength function, return the taxi count from the state
 * In the taxiDepart function, 	
 * 		Make sure the passenger count is greater than or equal to 12
 * 			Decrement the taxi count
 * 			Remove 12 passengers from the passenger count of the state
 * 
*/


function TaxiQueue(currentStatus) {
	var state = currentStatus || {
		passengers: 0,
		taxis: 0,
		taxisDeparted: 0
	};

	function joinQueue() {
		state.passengers++;
	}

	function leaveQueue() {
		if(state.passengers > 0){
			state.passengers--;
		}
	}

	function joinTaxiQueue() {
		state.taxis++;
	}

	function queueLength() {
		return state.passengers;
	}

	function taxiQueueLength() {
		return state.taxis;
	}

	function taxiDepart(){
		if(state.taxis == 0){
			return 'There is no taxi to take the passengers!';
		}

		if(state.passengers >= 12 && state.taxis > 0){
			state.taxis--;
			state.passengers = state.passengers - 12;
			state.taxisDeparted++;
		} 
	}

	function getState(){
		return state;
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
		getState
	}
}