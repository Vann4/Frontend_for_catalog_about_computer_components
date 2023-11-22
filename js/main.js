let ul_category = document.querySelector('#category');
let characteristics_goods= document.querySelector('.characteristics_goods');

const url = 'http://127.0.0.1:8000/category/';

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data)
    for (let i=0; i<data.length; i++){
        let array_data = data[i]; //Получение данных из массива
        let li_category = document.createElement('li');
        li_category.textContent = array_data.appellation_category

        let id_name = "category" + i;
        li_category.setAttribute("id", id_name)
        ul_category.appendChild(li_category)

        let characteristics_goods_tag_h2 = document.createElement('h2');
        characteristics_goods_tag_h2.textContent = array_data.appellation_category;
        characteristics_goods_tag_h2.classList.add('content_categories');

        characteristics_goods.appendChild(characteristics_goods_tag_h2);

        for(let j=0; j<array_data.good.length; j++){
          array_good = array_data.good[j]
          console.log(array_good)
          
          let product_tag_p = document.createElement('p'); //Для подписи "товар"
          product_tag_p.textContent = "Товар";
          characteristics_goods.appendChild(product_tag_p);

          let appellation_goods_tag_p = document.createElement('p'); //Для названий товара
          appellation_goods_tag_p.textContent = array_good.appellation_good;
          characteristics_goods.appendChild(appellation_goods_tag_p);

          if (product_tag_p.textContent == "Товар"){
            let characteristics_goods_tag_hr = document.createElement('hr');
            product_tag_p.before(characteristics_goods_tag_hr);
          }
        
          let description_goods_tag_p = document.createElement('p'); //Для вывода описания товара
          description_goods_tag_p.textContent = array_good.description;
          description_goods_tag_p.setAttribute("id", "description_goods");
          characteristics_goods.appendChild(description_goods_tag_p);

          for(let jj=0; jj<array_good.characteristic.length; jj++){
            array_characteristic = array_good.characteristic[jj];
            // console.log(array_characteristic)

            let characteristics_goods_tag_p = document.createElement('p');
            characteristics_goods_tag_p.textContent = array_characteristic.characteristic_name;
            characteristics_goods.appendChild(characteristics_goods_tag_p);

            let characteristic_processors_tag_p = document.createElement('p');
            characteristic_processors_tag_p.textContent = array_characteristic.characteristic;
            characteristics_goods.appendChild(characteristic_processors_tag_p);
          }
        }
        // console.log(array_data)
    }
  }).catch(function(error) {
    console.log('Категории не получены', error);
  });


// const url_owner = 'http://127.0.0.1:8000/owners/'

// fetch(url_owner)
//   .then((resp) => resp.json())
//   .then(function(data) {
//     console.log(data)
//     for (let i=0; i<data.length; i++){
//         let array_data = data[i]; //Получение данных из массива
//         console.log(array_data)
//     }
    
//   }).catch(function(error) {
//     console.log('Request failed', error);
//   });

// Get form element
const form_create_goods = document.querySelector('#create_goods');

// Add submit event listener
form_create_goods.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('prevented');

  // Get data from form
  const appellation_good = form_create_goods.querySelector('#appellation_good').value;
  const description = form_create_goods.querySelector('#description').value;
  const category_id = form_create_goods.querySelector('#category_id').value;
  const owner_id = form_create_goods.querySelector('#owner_id').value;

  fetch('http://127.0.0.1:8000/good/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({appellation_good, description, category_id, owner_id})
  })
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
});

// Всплывающее окно для добавления товара
$(document).ready(function () {
  $("a.myLinkModal").click(function (event) {
      event.preventDefault();
      $("#myOverlay").fadeIn(297, function () {
          $("#myModal")
              .css("display", "block")
              .animate({ opacity: 1 }, 198);
      });
  });

  $("#myModal__close, #myOverlay").click(function () {
      $("#myModal").animate({ opacity: 0 }, 198, function () {
          $(this).css("display", "none");
          $("#myOverlay").fadeOut(297);
      });
  });
});