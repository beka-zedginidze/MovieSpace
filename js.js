let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    initialSlide : 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  let url = "https://api.themoviedb.org/3/movie/popular?api_key=78828dca7949b70ca50313e4d49660d1&language=en-US&page=1&fbclid=IwAR0PuIxpwmBg_C7v1cSacQe37ekmHfTxzk9jpSqed1b1g-Zh_dRkKuJF0Vs"
  fetch(url)
  .then(response => response.json())
  .then(data => initMovies(data.results))

  let initMovies = (movies)=>{
    console.log(movies, "data")
    movies.forEach(movie => {
      console.log(movie);
      let movieList = document.getElementById('movies-ul')
      let movieLi = document.createElement("li");
      let imgUrl = 'https://image.tmdb.org/t/p/original';

      movieLi.innerHTML = 
      `
      <img src="${imgUrl+movie.poster_path}" width="220" id="${movie.id+"img"}" class="poster"></img>
      <div class="movie-info" id="${movie.id}">
        <p>Title: ${movie.original_title}</p>
        <p>Rate: ${movie.vote_average}</p>
        <p>Date: ${movie.release_date}</p>
      </div>
      `
      
      movieLi.addEventListener("mouseover", function() {
        let movieHover = document.getElementById(movie.id);
        movieHover.style.display = "block";

        let blurImg = document.getElementById(movie.id+"img");
        blurImg.style.filter = "blur(10px)";
        blurImg.style.transition = "2s";

      });
      
    
      movieLi.addEventListener("mouseleave", function() {
        let movieHover = document.getElementById(movie.id);
        movieHover.style.display = "none";

        let blurImg = document.getElementById(movie.id+"img");
        blurImg.style.filter = "blur(0px)";
        blurImg.style.transition = "2s";

        
      });
     
      movieList.appendChild(movieLi);
    });

}