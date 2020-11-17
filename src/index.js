import '../public/st.css';
import {changeView} from "./modules/view"
import {addFavoriteMovieToLocalStorage,
        removeFavoriteMovieFromLocalStorage,
        deleteMovieFromFavList, }  from './modules/localStorage';

let info = document.getElementById('info');

let film_data=[];
const gettingFilm =  async () => {
    const data = await fetch("http://my-json-server.typicode.com/moviedb-tech/movies/list");
     film_data = await data.json();
    createDisplayFilmList(film_data);
    addOnClickToFilm();
    createFavoriteList();
    removeFavoriteMovieFromLocalStorage();
    changeView();
};

const gettingFilmId =  async (id) => {
    let data_id;
    const data = await fetch(`http://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`);
    data_id = await data.json();
    createModalPage(data_id);
};

function createDisplayFilmList(film_data) {
    let key;
    for (key in film_data) {
        let id = film_data[key].id;
        let name = film_data[key].name;
        info.innerHTML += `
     <div class="gallery" id="${id}" >
         <div class="poster"><img src ="${film_data[key].img}"></div>
         <div class="film-name">${film_data[key].name}</div>
         <div class="film-year">${film_data[key].year}</div>
         <div class="star" movieId="${id}"  name="${name}"><span  class="span-star"></span></div>
     </div> `
    }
}

function addOnClickToFilm() {
    let gallery = document.querySelectorAll('.gallery');
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].onclick = function (e) {
            if (e.target.tagName.toUpperCase() !== 'SPAN') {
                let id = gallery[i].id;
                gettingFilmId(id);
            }
        }
    }
}

function createModalPage (film_data){
    document.querySelectorAll('.modal-body').forEach(e => e.remove());
    let modal = document.getElementById('modal');
            modal.innerHTML += `
        <div class="modal-body" id="modal-body">
            <div class="modal-content" id="modal-content">
               <div class="left-block">
                    <div class="modal-poster"><img  src ="${film_data.img}"/></div>
                    <div class="modal-star"  name="${film_data.name}"><span  class="span-modal-star"></span></div>
                    <div>${film_data.year}</div>
                    <div class="genres-list">${film_data.genres.map((genre)=>{
                        return ` <div class="genre">${genre}</div>`
                        }).join(' ')}
                    </div>
               </div>
               <div class="right-block">
                    <div class="modal-name">${film_data.name}</div>
                    <div class="modal-text">${film_data.description}</div>
                    <div class="modal-bottom-text">
                        <div class="modal-dir">Director: ${film_data.director}</div>
                        <div class="modal-staring">Starring: ${film_data.starring}</div>
                    </div>               
                    <button class="close-modal" id="close" > X </button> 
                </div>
            </div>
        </div>
         ` ;
            modal.style.display = "inline-block";
            let closeBtn = document.getElementById('close');
            closeBtn.onclick = function () {
                modal.style.display = "none";
            };
}

export function createFavoriteList() {
    const star = document.querySelectorAll('.star');
    let list_content = document.querySelector(".list-content");
        for (let i = 0; i < star.length; i++) {
            let name = star[i].getAttribute("name");
            let id = star[i].getAttribute("movieId");
            star[i].onclick = function () {
                addFavoriteMovieToLocalStorage(name, id, list_content);
            }
        }
        deleteMovieFromFavList();
}

// function changeStarColor () {
//     let sp = document.querySelector(".span-star");
//     sp.addEventListener("click", () => {
//         sp.classList.toggle("sp-white");
//         //sp.classList.remove("span-star");
//         console.log( sp.classList);
//         addFavoriteMovieToLocalStorage()
//     });
// }

gettingFilm();



