var button = document.getElementById("submit");

button.addEventListener("click", handleClick);

function handleClick() {

    var inputUrl = document.getElementById("url").value;
    var titleUrl = document.getElementById("title").value;
    var rating = document.getElementById("rating").value;

    var movieCard = document.getElementById("moviecardDiv");

    movieCard.innerHTML += `
        <div class="card">
            <img src="${inputUrl}" alt="">
            <p>Movie: ${titleUrl}</p>
            <h3>Rating: ${rating}</h3>
        </div>
    `;
}