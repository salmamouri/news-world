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
             <div> ${item.category_name}</div>
           
    `;
    catConatiner.appendChild(cateDiv);
  });
};
