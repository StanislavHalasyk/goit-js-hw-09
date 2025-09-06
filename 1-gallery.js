import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as e}from"./assets/vendor-B-WyX8ve.js";const o=document.querySelector(".gallery"),n=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];o.innerHTML="";const c=n.map(({preview:i,original:a,description:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${p}"
          />
        </a>
      </li>`).join("");o.insertAdjacentHTML("beforeend",c);const t=document.createElement("style");t.textContent=`
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 0;
    list-style: none;
    justify-content: center;
    margin: 24px auto;
    max-width: 1128px;
  }
  .gallery-item {
    width: calc((100% - 24px * 2) / 3);
    box-sizing: border-box;
    overflow: hidden;
    transition: transform 0.5s;
  }
  .gallery-item:hover {
    transform: scale(1.05);
  }
  .gallery-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .gallery-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s;
  }
  .gallery-image:hover {
    opacity: 0.8;
  } 
`;document.head.appendChild(t);new e(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
