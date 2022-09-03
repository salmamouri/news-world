const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.data.news_category));
};
loadData();

const displayCategory = (data) => {
  console.log(data);
  const catConatiner = document.getElementById("category-container");
  data.forEach((item) => {
    // console.log(item);
    const cateDiv = document.createElement("div");
    cateDiv.classList.add("d-flex");
    cateDiv.innerHTML = `
             <button class= "btn btn-primary" onclick='content(${item.category_id})'> ${item.category_name}</button>
           
    `;
    catConatiner.appendChild(cateDiv);
  });
};
const content = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};

const displayNews = (data) => {
  console.log(data);

  const newsContainer = document.getElementById("displayNews");
  newsContainer.innerHTML = "";
  data.forEach((item) => {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("news");

    newsDiv.innerHTML = `
     <div   class="d-flex m-5 border border-1 rounded-1 ">
    <div>  <img src=${item.thumbnail_url}/> </div>
    <div class = 'm-3 p-3'>
    <h3>${item.title}</h3>
    <p> ${item.details.slice(0, 400)}...</p>
      <div class="d-flex align-items-center justify-content-between m-t-">
      <div >
      <img style="width: 50px;"  class=' rounded-circle' src=${
        item.author.img
      }/>
      <p class='fs-6 text-center'>${item.author.name}</p>
      </div>
      <p> <i class="fa-regular fa-eye"></i> ${item.total_view} </p>
      <p> <i class="fa-solid fa-star"></i> ${item.rating.number}</p>
      <p><i class="fa-solid fa-arrow-right"></i></p></div>
    </div>
     
     </div>
    `;
    newsContainer.appendChild(newsDiv);
  });
};
