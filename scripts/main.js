import { fishList } from './fish-list.js'
import { tipList } from './tip-list.js'
import { locationList } from './location-list.js'
import { mostHolyFish } from './holy-fish.js'
import { regularFish } from './regular-fish.js'
import { soldierFish } from './soldier-fish.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element

const renderFishToDOM = (fishHTML) =>{
    const fishListElement = document.getElementById('fishList');
    if (fishListElement) {
        fishListElement.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"')
    }
};
renderFishToDOM(fishHTML);

const renderTipToDOM = (tipHTML) =>{
    const tipListElement = document.getElementById('tipList');
    if (tipListElement) {
        tipListElement.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"')
    }
};
renderTipToDOM(tipHTML);

const renderLocationToDOM = (locationHTML) =>{
    const locationListElement = document.getElementById('locationList');
    if (locationListElement) {
        locationListElement.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList"')
    }
};
renderLocationToDOM(locationHTML);

const holyFishHTML = mostHolyFish() 
const fivePlusHTML = soldierFish()
const commonFishHTML = regularFish()

const allFishHTML = `${holyFishHTML}${fivePlusHTML}${commonFishHTML}`

const fishListElement = document.getElementById('fishList');
if (fishListElement) {
    fishListElement.innerHTML = allFishHTML;
} else {
    console.error('Could not find element with id "fishList"');
}