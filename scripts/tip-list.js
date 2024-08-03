import { database } from "./fish-data.js";

export const tipList = () =>{
    let tipHTML = ''
    for (const tip of database.tips) {
        tipHTML += `
            <ul class="tips">
            <li class="tip">${tip.topic}</li>
            <li class="tip">${tip.text}</li>
            </ul>`
    }
    return tipHTML
}