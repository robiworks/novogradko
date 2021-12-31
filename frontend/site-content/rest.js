var apiURL = "http://localhost:5000";

async function getBuildings() {
    console.log("Fetching all buildings from API...");
    const response = await fetch(apiURL + "/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "default",
    });
    let data = await response.json();
    return data;
}

async function getApartments() {
    console.log("Fetching all apartments from API...");
    const response = await fetch(apiURL + "/apartments", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "default",
    });
    let data = await response.json();
    return data;
}

async function getHouses() {
    console.log("Fetching all houses from API...");
    const response = await fetch(apiURL + "/houses", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "default",
    });
    let data = await response.json();
    return data;
}
