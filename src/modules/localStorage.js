
export function addFavoriteMovieToLocalStorage(name, id, list_content) {
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const isAlreadyLiked = !!favoriteMovies.filter((o) => (o.id === id)).length;
    console.log(isAlreadyLiked);
    if (isAlreadyLiked) {
        removeFavoriteMovieFromLocalStorage(id);
        document.getElementById("favoriteMovieId" + id).remove();
    } else {
        list_content.innerHTML+=`
                <div class="list-block" id="favoriteMovieId${id}">
                    <div class="list-item">${name}</div>
                    <button class="del-item-film">x</button> 
                </div>
                `;
        favoriteMovies.push({name, id});
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
        deleteMovieFromFavList();
    }

}

export function removeFavoriteMovieFromLocalStorage(id) {
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies.filter((o, i) => (o.id !== id))));
}

export function deleteMovieFromFavList () {
    let deleteMovie = document.querySelectorAll(".del-item-film");
    let listItem = document.querySelectorAll(".list-block");
    for (let j = 0; j <deleteMovie.length; j++ ) {
        deleteMovie[j].onclick = () => {
            listItem[j].remove();
        }
    }
}

window.onload = function () {
    console.log(localStorage.getItem("favoriteMovies"));
    let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    let favoriteMoviesContainer = document.querySelector(".list-content");
    favoriteMoviesContainer.innerHTML=`
        ${favoriteMovies.map((o, i) => {
            return `
                <div class="list-block" id="favoriteMovieId${o.id}">
                    <div class="list-item">${o.name}</div>
                    <button class="del-item-film">x</button>
                </div>
                `
        }).join('')}
    `
    deleteMovieFromFavList()
};

