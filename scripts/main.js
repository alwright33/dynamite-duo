/*These lines import the 'generateMoviesHTML' function from the 'movie-converter.js' module and the 
'renderMoviesToDOM' function from the 'movie-render.js' module. 
These functions are necessary for generating the movie cards HTML and rendering them to the DOM.*/
import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';
/*This line calls the 'generateMoviesHTML' function, which generates the HTML markup for the movie cards based on the movie data. 
The generated HTML is stored in the 'movieHTML' variable.*/
const movieHTML = generateMoviesHTML()
/*This line calls the 'renderMoviesToDOM' function, passing the 'movieHTML' as an argument. 
The function takes the generated HTML and inserts it into the specified DOM element ("movie-list").*/
renderMoviesToDOM(movieHTML)