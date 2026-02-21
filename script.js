let selectedPrice = 0;

function selectDestination(place, price) {
    document.getElementById("destination").value = place;
    selectedPrice = price;
}

function calculatePrice() {

    let name = document.getElementById("name").value;
    let days = Number(document.getElementById("days").value);

    if (name === "" || days <= 0 || selectedPrice === 0) {
        alert("Please fill all details!");
        return;
    }

    let total = selectedPrice * days;

    document.getElementById("result").innerHTML =
        "Thank you " + name + "<br>" +
        "Destination: " + document.getElementById("destination").value + "<br>" +
        "Total Cost: ₹" + total;
}