document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var selectedMovies = [];
    var checkboxes = document.querySelectorAll('input[name="movie"]:checked');
    checkboxes.forEach(function(checkbox) {
      selectedMovies.push(checkbox.value);
    });
  
    var recommendedMovies = getRecommendedMovies(selectedMovies);
    displayRecommendedMovies(recommendedMovies);
  });
  
  function getRecommendedMovies(selectedMovies) {
    
    const allMovies = [
      { title: "Spirited Away", genre: "Family" },
      { title: "Fear", genre: "Horror" },
      { title: "Elemental", genre: "Family" },
      { title: "Barbie", genre: "Comedy" },
      { title: "Kung Fu Panda 4", genre: " Animation" },
      { title: "The Lion King", genre: "Family" },
      { title: "Code 8 Part II", genre: "Crime" },
      { title: "No Way Up", genre: "Horror" },
      { title: "The Adventures", genre: "Adventure" },
      { title: "The OctoGames", genre: "Horror" },
      { title: "Napoleon", genre: "History" },
      { title: "Napoleon", genre: "War" },
      { title: "Poor Things", genre: "Science Fiction" },
      { title: "Spider-Man: Into the Spider-Verse", genre: "Action" },
      { title: "The Voyagers", genre: "TV Movie" },
      { title: "Damsel", genre: "Fantasy" },
      { title: "Dune", genre: "Science Fiction" },
      { title: "Meteor", genre: "Thriller" },
      { title: "Spaceman", genre: "Drama" },
      { title: "Sri Asih", genre: "Action" },
      { title: "Argylle", genre: "Comedy"},
      { title: "Anyone But You", genre: "Romance" }
    ];
  
    var recommendedMovies = [];
    allMovies.forEach(function(movie) {
      if (selectedMovies.indexOf(movie.title) === -1) { 
        selectedMovies.forEach(function(selectedMovie) {
          if (movie.genre === getGenre(selectedMovie)) { 
            recommendedMovies.push(movie.title);
          }
        });
      }
    }); 
  
    return recommendedMovies;
  }
  
  function getGenre(movieTitle) {
    
    const genres = {
      "The Avengers": "Action",
      "The Godfather": "Crime",
      "Interstellar": "Adventure",
      "The Lord of the Rings: The Two Towers": "Fantasy",
      "Harry Potter and the Prisoner of Azkaban": "Fantasy",
      "Puss in Boots: The Last Wish": "Animation",
      "Coco": "Family",
      "Toy Story 2": "Family",
      "Tangled ": "Animation",
      "Gifted": "Drama",
      "The Wolf of Wall Street": "Crime",
      "Love, Simon": "Romance",
      "Inside Out": "Animation",
      "Cruella": "Crime",
      "Kingsman: The Secret Service": "Action",
      "Green Book": "History",
      "Top Gun: Maverick": "Action",
      "Remi, Nobody's Boy": "Family",
      "The Hate U Give": "Crime",
      "Raya and the Last Dragon": "Fantasy",
      "Finding Nemo": "Animation",
      "Groundhog Day": "Comedy",
      "Avatar": "Science Fiction",
      "Hamilton": "History",
      "Argentina, 1985": "History",
      "Jaws": "Horror",
      "Evil Dead II": "Horror",
      "Halloween": "Horror",
      "Five Feet Apart": "Drama",
      "Purple Hearts": "Romance",
      "Me Before You": "Romance",
      "Inception": "Action",
      "The Matrix": "Action",
      "Starstruck": "Romance",
      "Sabrina the Teenage Witch": "TV Movie",
      "Blue Lagoon: The Awakening": "TV Movie",
      "Room": "Thriller",
      "Nobody": "Thriller",
      "The Great Dictator": "War",
      "Ayla: The Daughter of War": "War",
      "Jurassic Park": "Science Fiction",
    }; 
  
    return genres[movieTitle];
  }
  
  function displayRecommendedMovies(recommendedMovies) {
    var recommendedMoviesList = document.getElementById('recommendedMovies');
    recommendedMoviesList.innerHTML = '';
  
    recommendedMovies.forEach(function(movie) {
      var li = document.createElement('li');
      li.textContent = movie;
      recommendedMoviesList.appendChild(li);
    });
  
    document.getElementById('recommendations').style.display = 'block'; 
  }
 


