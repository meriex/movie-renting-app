// movie
class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  }
  // rental process
  class Rental {
    constructor(movie, renterName, rentDate, returnDate) {
      this.movie = movie;
      this.renterName = renterName;
      this.rentDate = rentDate;
      this.returnDate = returnDate;
    }
  }
  
 
  // Return a movie
  movieStore.returnMovie(rental1);
  console.log('Movie after return:', movie1);
  class MovieStore {
    constructor() {
      this.movies = [];
      this.rentals = [];
    }
  
    addMovie(title, genre, availableCopies) {
      const movie = new Movie(title, genre, availableCopies);
      this.movies.push(movie);
      return movie;
    }
  
    rentMovie(movie, renterName, rentDate, returnDate) {
      if (movie.availableCopies > 0) {
        movie.availableCopies--;
        const rental = new Rental(movie, renterName, rentDate, returnDate);
        this.rentals.push(rental);
        return rental;
      } else {
        console.log('Sorry, this movie is currently not available for rent.');
        return null;
      }
    }
  
    returnMovie(rental) {
      rental.movie.availableCopies++;
      rental.returnDate = new Date();
    }
  }

  // Create a MovieStore instance
  const movieStore = new MovieStore();
  
  // Add some movies to the store
  const movie1 = movieStore.addMovie('Inception', 'Sci-Fi', 5);
  const movie2 = movieStore.addMovie('Black Panther', 'Action', 3);
  
  // Rent a movie
  const rental1 = movieStore.rentMovie(movie1, 'Chiemerie ', new Date(), null);
  console.log('Rental:', rental1);
