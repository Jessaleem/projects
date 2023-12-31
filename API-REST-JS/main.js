const API_URL_ALL =
  'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_rMz40OOpgEye3qNzvFMioVWADhq4bZz7gmynp1LL4uZRsbliTK6dLa4F0PJBTAeM';

const API_URL_FAVOURITES =
  'https://api.thecatapi.com/v1/favourites?limit=10&api_key=live_rMz40OOpgEye3qNzvFMioVWADhq4bZz7gmynp1LL4uZRsbliTK6dLa4F0PJBTAeM';

const spanError = document.getElementById('error');

let listContainer = document.getElementById('list-container');
let mainContainer = document.getElementById('main-container');
let showFavorites = document.getElementById('favorites');
const list = document.createDocumentFragment();

const div = document.createElement('div');
div.classList.add('btnContainer');
const button = document.createElement('button');

// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     const img = document.querySelector('img');
//     img.src = data[0].url;
//   });

const fetchData = async () => {
  try {
    const res = await fetch(API_URL_ALL);
    const data = await res.json();
    console.log('load');
    console.log(data);
    if (res.status !== 200) {
      spanError.innerHTML = 'Hubo un error:' + res.status;
    } else {
      showData(data);
      // const img = document.querySelector('img');
      // img.src = data[0].url;
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

fetchData();

const showData = (data2) => {
  data2.map((info, index) => {
    console.log(index);
    const article = document.createElement('article');
    article.classList.add('item-container');
    const image = document.createElement('img');
    image.src = `${info.url}`;
    image.alt = 'Cat photo';
    image.classList.add('photo');

    const favorite = document.createElement('button');
    favorite.classList.add('favBtn');
    favorite.setAttribute('id', 'favBtn');
    favorite.innerHTML = 'Save as favorite';
    favorite.onclick = () => saveFavCats(info.id);

    article.appendChild(image);
    article.appendChild(favorite);

    list.appendChild(article);
  });

  listContainer.appendChild(list);

  button.classList.add('random');
  button.innerText = 'New cat images';
  button.addEventListener('click', fetchData);
  div.appendChild(button);

  mainContainer.appendChild(div);
};

const favoriteCats = async () => {
  const res = await fetch(API_URL_FAVOURITES);
  const data = await res.json();
  console.log('favorite');
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = 'Hubo un error:' + res.status;
  } else {
    data.forEach((cat) => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      btn.innerText = 'Remove from favorites';

      img.classList.add('photo');
      img.src = cat.image.url;

      article.appendChild(img);
      article.appendChild(btn);
      list.appendChild(article);
    });
    showFavorites.appendChild(list);
  }
};

favoriteCats();

async function saveFavCats(id) {
  const res = await fetch(API_URL_FAVOURITES, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      image_id: id,
    }),
  });
  const data = await res.json();
  // console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = 'Hubo un error:' + res.status;
  }
}
