let characterContainer = document.getElementById('container');
const card = document.createDocumentFragment();

let ids = new Array(10).fill().map((el, i) => i + 1);

const requestInfo = async () => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${ids}`
    );
    const data = await response.json();
    showData(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const showData = (data) => {
  data.map((character) => {
    let div = document.createElement('div');
    let name = document.createElement('h3');
    let div2 = document.createElement('div');
    let image = document.createElement('img');
    name.innerHTML = `${character.name}`;
    image.src = `${character.image}`;
    image.alt = '';

    div.appendChild(name);
    div2.appendChild(image);
    div.appendChild(div2);
    card.appendChild(div);
  });
  characterContainer.appendChild(card);
};

requestInfo();
