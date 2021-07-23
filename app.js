const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const galleryRef = document.querySelector('.gallery')
const lightbox = document.querySelector('.lightbox')
const closeButtom = document.querySelector('.lightbox__button')
const lightboxImage = document.querySelector('.lightbox__image')


const makeGaleryMarkup = (img) => {
  const { preview, original, description } = img;
  return `<li class="gallery__item">
<a class="gallery__link" /* href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
</a>
</li>`;
}
const makeGalery = galleryItems.map(makeGaleryMarkup).join('')

galleryRef.insertAdjacentHTML('afterbegin', makeGalery)

const image = document.querySelector('.gallery__image')
galleryRef.addEventListener('click', openLightBox)
closeButtom.addEventListener('click', closeLightBox)


function openLightBox(event) {
  if (!event.target.dataset.source) {
    return
  }
  event.preventDefault();
  lightboxImage.src = event.target.dataset.source
  lightbox.classList.add('is-open')
    document.addEventListener('keydown',closeOnEsc)
}

function closeLightBox(event) {
  lightboxImage.src = "";
  lightbox.classList.remove('is-open')
    document.removeEventListener('keydown',closeOnEsc)
  
}



const overlay = document.querySelector('.lightbox__overlay')
overlay.addEventListener('click', closeLightBox)

function closeOnEsc(event) {
  if (event.code === 'Escape' && lightbox.classList.contains('is-open')) {
    closeLightBox()
  }
}