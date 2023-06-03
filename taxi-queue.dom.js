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
const taxiDepartBtn = document.querySelector('.depart');
const taxisDeparted = document.querySelector('.taxi_departed');


let currentStatus;
//Check if there is a state on localStorage
if(localStorage['state']){
    //Display the passenger count from localStorage
   currentStatus = JSON.parse(localStorage.getItem('state'));
} else {
    localStorage.setItem('state', JSON.stringify({passengers: 0, taxis: 0, taxisDeparted: 0}));
    location.reload();
}

// create Factory Function instance

const taxiQueue = TaxiQueue(currentStatus);

passengerCountElement.innerHTML = currentStatus.passengers;
taxiCountElement.innerHTML = currentStatus.taxis;
taxisDeparted.innerHTML = currentStatus.taxisDeparted;

// DOM events
passengerJoinQueue.addEventListener('click', ()=>{
    taxiQueue.joinQueue();
  
    //update local storage
    localStorage.setItem('state', JSON.stringify(taxiQueue.getState()))
    passengerCountElement.innerHTML = JSON.parse(localStorage.getItem('state')).passengers;
});

passengerLeaveQueue.addEventListener('click', ()=>{
    taxiQueue.leaveQueue();
 
    //update local storage
    localStorage.setItem('state', JSON.stringify(taxiQueue.getState()))
    passengerCountElement.innerHTML = JSON.parse(localStorage.getItem('state')).passengers;
});

taxiJoin.addEventListener('click', ()=>{
    taxiQueue.joinTaxiQueue();

    //update local storage
    localStorage.setItem('state',JSON.stringify(taxiQueue.getState()));
    taxiCountElement.innerHTML = JSON.parse(localStorage.getItem('state')).taxis;
});

taxiDepartBtn.addEventListener('click', ()=>{
    taxiQueue.taxiDepart();

    //update local storage
    localStorage.setItem('state', JSON.stringify(taxiQueue.getState()))
    passengerCountElement.innerHTML = JSON.parse(localStorage.getItem('state')).passengers;
    taxiCountElement.innerHTML = JSON.parse(localStorage.getItem('state')).taxis;
    taxisDeparted.innerHTML = JSON.parse(localStorage.getItem('state')).taxisDeparted;
});

