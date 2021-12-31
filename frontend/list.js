var listElement = document.getElementById("list");

document.addEventListener('DOMContentLoaded', turnAllFiltersOn);
document.addEventListener('DOMContentLoaded', populateList);

function populateList() {
    getBuildings().then(data => {
        listElement.innerHTML = "";
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

var stanCB = document.getElementById("vrsta-0");
var hiseCB = document.getElementById("vrsta-1");

var reg0CB = document.getElementById("regija-0");
var reg1CB = document.getElementById("regija-1");
var reg2CB = document.getElementById("regija-2");
var reg3CB = document.getElementById("regija-3");
var reg4CB = document.getElementById("regija-4");
var reg5CB = document.getElementById("regija-5");
var reg6CB = document.getElementById("regija-6");
var reg7CB = document.getElementById("regija-7");
var reg8CB = document.getElementById("regija-8");
var reg9CB = document.getElementById("regija-9");
var reg10CB = document.getElementById("regija-10");
var reg11CB = document.getElementById("regija-11");

var statusZgrCB = document.getElementById("status-0");
var statusGraCB = document.getElementById("status-1");
var statusPriCB = document.getElementById("status-2");

var all = [stanCB, hiseCB, reg0CB, reg1CB, reg2CB, reg3CB, reg4CB, reg5CB, reg6CB, reg7CB, reg8CB, reg9CB, reg10CB, reg11CB, statusZgrCB, statusGraCB, statusPriCB];

function turnAllFiltersOn() {
    for (let i = 0; i < all.length; i++) {
        all[i].checked = true;
    }
}
