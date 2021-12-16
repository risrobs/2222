import "../scss/app.scss";
import 'regenerator-runtime/runtime'

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  const ul = document.querySelector("ul");

  async function fetchData() {
    const res = await fetch(API_URL)
    const { results } = await res.json();
    return results.map(a => a.name)
  }

  async function createElements() {
    const data = await fetchData()

    data.forEach(name => {
      const liElement = document.createElement('li')
      liElement.innerHTML = name;
      ul.appendChild(liElement)
    });
  }

  createElements();
});
