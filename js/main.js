import { getGames, getDetailes } from "./data.js";
import { displayGames, displayDetailes } from "./display.js";
export const load = document.querySelector(".load");
let dataForGames = await getGames("mmorpg");
let id;
displayGames(dataForGames, 0);
let allHome = document.querySelectorAll(".home");
function catagory() {
  document
    .getElementById("pills-MMORPG-tab")
    .addEventListener("click", async function () {
      let dataForGames = await getGames("mmorpg");
      displayGames(dataForGames, 0);
      travarsForAllCard(dataForGames, "#pills-MMORPG .card", 0);
      // fixedIndex(0)
    });
  document
    .getElementById("pills-SHOOTER-tab")
    .addEventListener("click", async function () {
      let dataForGames = await getGames("shooter");
      displayGames(dataForGames, 1);
      travarsForAllCard(dataForGames, "#pills-SHOOTER .card", 1);
      // console.log(dataForGames[0].id);
      // fixedIndex(1)
    });
  document
    .getElementById("pills-SAILING-tab")
    .addEventListener("click", async function () {
      let dataForGames = await getGames("sailing");
      displayGames(dataForGames, 2);
      travarsForAllCard(dataForGames, "#pills-SAILING .card", 2);
      //  fixedIndex(2)
    });
  document
    .getElementById("pills-PERMADEATH-tab")
    .addEventListener("click", async function () {
      let dataForGames = await getGames("permadeath");
      displayGames(dataForGames, 3);
      travarsForAllCard(dataForGames, "#pills-PERMADEATH .card", 3);
      //  fixedIndex(3)
    });
  document
    .getElementById("pills-SUPERHERO-tab")
    .addEventListener("click", async function () {
      let dataForGames = await getGames("superhero");
      displayGames(dataForGames, 4);
      travarsForAllCard(dataForGames, "#pills-SUPERHERO .card", 4);
      // fixedIndex(4)
    });
  document
    .getElementById("pills-PIXEL-tab")
    .addEventListener("click", async function () {
      let dataForGames = await getGames("pixel");
      displayGames(dataForGames, 5);
      travarsForAllCard(dataForGames, "#pills-PIXEL .card", 5);
      // fixedIndex(5)
    });
}
catagory();
function fixedIndex(i) {
  allHome[i].classList.add("d-none");
  document.querySelector("nav").classList.add("d-none");
  document.querySelector("header").classList.add("d-none");
  document.querySelector(".details").classList.remove("d-none");
}
function travarsForAllCard(resToGetId, selector, index) {
  const card = document.querySelectorAll(selector);
  for (let i = 0; i < resToGetId.length; i++) {
    card[i].addEventListener("click", async function () {
      id = resToGetId[i].id;
      let resDEtailes = await getDetailes(id);
      displayDetailes(resDEtailes);
      fixedIndex(index);
    });
  }
}
travarsForAllCard(dataForGames, "#pills-MMORPG .card", 0);
function closeDetailes(index) {
  allHome[index].classList.remove("d-none");
  document.querySelector("header").classList.remove("d-none");
  document.querySelector("nav").classList.remove("d-none");
  document.querySelector(".details").classList.add("d-none");
}
for (let i = 0; i < allHome.length; i++) {
  document.querySelector(".fa-close").addEventListener("click", function () {
    closeDetailes(i);
  });
}
