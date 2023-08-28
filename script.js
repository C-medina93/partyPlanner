// querey select your div
const events = document.querySelector('#events');

// make array
let eventsList = [];

// async function to use the promise 'method'
// make sure to use await so promises are vaild
async function fetchEvents(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events');
    const json = await response.json();
    eventsList = json.data;
    renderEvents();
}

// render function && .join('') attached to the callback<---to make string 
function renderEvents(){
    const html = eventsList.map((event) => {
        console.log(event);
        return `
        <div>
        <h2> ${event.name} </h2> 
        <p> ${event.description} </p>
        </div>
        `;
    }).join('');
    events.innerHTML = html; 
}
fetchEvents();
