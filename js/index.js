const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.data.news_category));
};
// Implementation of try catch
try {
  loadData();
} catch (error) {
  console.log(error);
}
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
    .then((data) => {
      // Try Catch Implementation
      try {
        displayNews(data.data);
      } catch (error) {
        console.log(error.message);
      }
    });
};

const displayNews = (data) => {
  console.log(data.length);
  const newsLength = document.getElementById("news-length");
  newsLength.innerHTML = "";
  const lengthDiv = document.createElement("div");

  lengthDiv.innerHTML = `
  <div  class="w-100 py-3 px-3 mt-3 rounded bg-light">${data.length} News Founded </div> `;

  newsLength.appendChild(lengthDiv);

  const newsContainer = document.getElementById("displayNews");

  toggleSpinner(true);
  newsContainer.innerHTML = "";
  data.forEach((item) => {
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("news");

    newsDiv.innerHTML = `
     <div  class="d-flex flex-md-row flex-column m-5 border border-1 rounded-1 "  >
    <div>  <img  src=${item.thumbnail_url}/> </div>
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

  toggleSpinner(false);
};

const displayModal = (id) => {
  console.log(id);
  const modalContainer = document.getElementById("modalContainer");
  const modalDiv = document.createElement("div");
};

// const modalContent = (id) => {
//   const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
//   console.log(url);

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayModal(data.data));
// };
// const displayModal = (data) => {
//   console.log(data);
//   const modalContainer = document.getElementById("modalContainer");
//   data.forEach((item) => {
//     const modalDiv = document.createElement("div");
//     modalDiv.classList.add("modal");
//     modalDiv.innerHTML = `
// //     <!-- Button trigger modal -->
// // <button type="button" class="btn btn-primary" >
// //   Launch demo modal
// // </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">${item.title}</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//     `;
//     modalContainer.appendChilda(modalDiv);
//   });
// };
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
