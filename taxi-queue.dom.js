/************* PSUEDOCODE ****************
 * 
 * Get reference to the passenger display element
 * Get reference to the passenger Join button 
 * Get reference to the passenger Leave button
 * Get reference to the taxi count display element
 * Get reference to the taxi Join button
 * Get reference to the taxi Depart button
 * 
 * Create an instance of the factory function
 * 
 * Display the counters from local Storage
 * 
 * Add event listeners to the buttons
 * 
*/


// write your DOM code here.


// DOM element references
const passengerCountElement = document.querySelector('.passenger_queue_count');
const passengerJoinQueue = document.querySelector('.join_queue');
const passengerLeaveQueue = document.querySelector('.leave_queue');
const taxiCountElement = document.querySelector('.taxi_queue_count');
const taxiJoin = document.querySelector('.join_taxi_queue');
const taxiDepart = document.querySelector('.depart');


let passengers, taxis, currentStatus;
//Check if there is a state on localStorage
if(localStorage['state']){
    //Display the passenger count from localStorage
   currentStatus = JSON.parse(localStorage.getItem('state'));
   console.log(currentStatus);
} else {
    localStorage.setItem('state', JSON.stringify({passengers: 0, taxis: 0}));
    location.reload();
}

// create Factory Function instance

const taxiQueue = TaxiQueue(currentStatus);

passengerCountElement.innerHTML = passengers;
taxiCountElement.innerHTML = taxis;

// DOM events
passengerJoinQueue.addEventListener('click', ()=>{
    //Get the passengers from local storage
    let status = JSON.parse(localStorage.getItem('state'));
    console.log(status);
    taxiQueue.joinQueue();
    console.log(taxiQueue.queueLength());
    //update local storage
    localStorage.setItem('state', JSON.stringify(taxiQueue.getState()))
    passengerCountElement.innerHTML = JSON.parse(localStorage.getItem('state')).passengers;
});

