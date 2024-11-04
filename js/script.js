const btnSearch = document.getElementById("btnSearch");

const QuotesUrl = "https://thesimpsonsquoteapi.glitch.me/quotes?count=3";

function getData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(objects => {
            console.log(objects)
            showData(objects);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

let dataContainer = document.getElementById("data-container");

function showData(array) {
    dataContainer.innerHTML = "";

    array.forEach((data) => {
        dataContainer.innerHTML += `
        <div class="card col-6 col-sm-3 col-md-3 col-lg-2">
            <img src="${data.image}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${data.character}</h5>
            <p class="card-text">"${data.quote}"</p>
            </div>
        </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getData(QuotesUrl)

    btnSearch.addEventListener("click", () => {
        getData(QuotesUrl);
    })
    
});