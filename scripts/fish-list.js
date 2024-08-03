import { database } from './fish-data.js';

export const fishList = () => {
    let fishHTML = '';
    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
               <img src="${fish.image}" alt="${fish.species} poster" class="fish__image">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <h3 class="fish__species">${fish.species}</h3>
                   <p class="fish__info">Length:${fish.length}</p>
                   <p class="fish__info">Location: ${fish.location}</p>
                   <p class="fish__info">Diet: ${fish.diet}</p>
               </div>
           </article>
          `  
    }
    return fishHTML
}