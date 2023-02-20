const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },

];

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

images.forEach(item => {
const itemOfgalleryEl = document.createElement("li");
itemOfgalleryEl.classList.add("gallery__item");

const imgOfitemGalleryEl = document.createElement("img");
imgOfitemGalleryEl.classList.add("gallery__img");
imgOfitemGalleryEl.src = item.url;
imgOfitemGalleryEl.width = 400;
imgOfitemGalleryEl.alt = item.alt;
itemOfgalleryEl.append(imgOfitemGalleryEl);
galleryEl.append(itemOfgalleryEl);
})




