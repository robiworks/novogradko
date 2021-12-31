var listElement = document.getElementById("list");

document.addEventListener('DOMContentLoaded', populateList);

function populateList() {
    listElement.innerHTML = "";
    getBuildings().then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let object = data[i];
            let id = parseInt(object.id);

            let buildingInfo = `
                <div class="box">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image">
                                <img src="./images/${id}.jpg" style="max-width: 300px;">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <span style="font-size: larger;"><strong>${object.name}</strong> (${object.type_description})</span><br>
                                    Regija: <em>${object.region_name}</em><br>
                                    Stanje: <em>${object.status_description}</em><br><br>
                                    Spletna stran: <a target="_blank" href="${object.website}">kliknite tukaj</a>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            `;

            listElement.innerHTML += buildingInfo;
        }
    });
}