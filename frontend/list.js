var listElement = document.getElementById("list");

document.addEventListener('DOMContentLoaded', populateList);

function populateList() {
    listElement.innerHTML = "";
    getBuildings().then(data => {
        for (let i = 0; i < data.length; i++) {
            let id = parseInt(data[i].id);
            let name = data[i].name;
            let type = parseInt(data[i].type);
            let website = data[i].website;

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
                                <strong>${name}</strong><br>
                                Vrsta: ${type === 0 ? "stanovanja" : "hiša"}<br>
                                Spletna stran: <a target="_blank" href="${website}">kliknite tukaj</a>
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