import { movies } from './movies-data.js';

//We define a function called 'generateMoviesHTML' using an arrow function syntax.
export const generateMoviesHTML = () => {
    //Inside the function, we initialize an empty string variable called 'movieHTML' to store the generated HTML markup.
    let movieHTML =''
    //We use a for...of loop to iterate over each movie object in the movies array.
    for (const movie of movies) {
        movieHTML += `
            <article class="movie">
               <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
               <div class="movie__details">
                   <h2 class="movie__title">${movie.title}</h2>
                   <p class="movie__description">${movie.description}</p>
               </div>
           </article>
        `
         /*We create an <article> element with the class "movie" to represent each movie card.
Inside the <article>, we have an <img> element that displays the movie poster image. The src attribute is set to the poster property of the movie object, and the alt attribute is set to the movie title followed by "poster" for accessibility.
We also have a <div> element with the class "movie__details" to hold the movie title and description.
The movie title is wrapped in an <h2> element with the class "movie__title".
The movie description is wrapped in a <p> element with the class "movie__description"*/   
    } 
    //We concatenate each generated movie HTML to the movieHTML string.
    //Finally, we return the movieHTML string containing the generated HTML markup for all the movies.
    return movieHTML
}




/*We created a JavaScript module that converts the movie data into HTML markup. By importing the movie data from the 'movies-data.js 
file, we can access the [movies] array and iterate over each movie object. 

Inside the 'generateMoviesHTML function, we use a 'for...of' loop to go through each movie object and generate the corresponding 
HTML structure using template literals. We dynamically insert the movie poster, title, and description into the appropriate elements.

The generated HTML markup for each movie is concatenated into the movieHTML string, which is then returned by the function. 
This allows us to obtain the complete HTML markup for all the movies.

By exporting the generateMoviesHTML function, we make it available for use in other modules, 
such as the main module where we will render the movie cards to the DOM. */