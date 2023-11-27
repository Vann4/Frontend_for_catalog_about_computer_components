let ul_category = document.querySelector('.all_categories');
let characteristics_goods= document.querySelector('.characteristics_goods');

const url = 'http://127.0.0.1:8000/category/';

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data);
    for (let i=0; i<data.length; i++){
        let array_data = data[i]; //Получение данных из массива
        let li_category = document.createElement('li');
        li_category.textContent = array_data.appellation_category;

        let id_name = "category";
        li_category.setAttribute("id", id_name);
        ul_category.appendChild(li_category);

        let characteristics_goods_tag_div = document.createElement('div');
        characteristics_goods_tag_div.classList.add('content_goods');
        characteristics_goods.appendChild(characteristics_goods_tag_div);

        let characteristics_goods_tag_h2 = document.createElement('h2');
        characteristics_goods_tag_h2.textContent = array_data.appellation_category;
        characteristics_goods_tag_h2.classList.add('content_categories');
        characteristics_goods_tag_div.appendChild(characteristics_goods_tag_h2);

        if (array_data.id == 1){
          characteristics_goods_tag_div.classList.add('is_active');
        } else {
          characteristics_goods_tag_div.classList.add('is_inactive');
        }

        const category_items = Array.from(document.querySelectorAll('#category'))
        const content_goods_items = Array.from(document.querySelectorAll('.content_goods'))

        const clearActiveClass = (element) => {
          element.find(item => item.classList.remove('is_active'))
          element.find(item => item.classList.add('is_inactive'))
        }
        
        const setActiveClass = (element, index) => {
          element[index].classList.add('is_active')
          element[index].classList.remove('is_inactive')
        }

        const checkoutTabs = (item, index) => {
          item.addEventListener('click', () => {

            clearActiveClass(content_goods_items)
            
            setActiveClass(category_items, index)
            setActiveClass(content_goods_items, index)
          })
        }
        category_items.forEach(checkoutTabs)

        for(let j=0; j<array_data.good.length; j++){
          array_good = array_data.good[j];

          let product_tag_p = document.createElement('p'); //Для подписи "товар"
          product_tag_p.textContent = "Товар";
          characteristics_goods_tag_div.appendChild(product_tag_p);

          let appellation_goods_tag_p = document.createElement('p'); //Для названий товара
          appellation_goods_tag_p.textContent = array_good.appellation_good;
          characteristics_goods_tag_div.appendChild(appellation_goods_tag_p);

          if (product_tag_p.textContent == "Товар"){
            let characteristics_goods_tag_hr = document.createElement('hr');
            product_tag_p.before(characteristics_goods_tag_hr);
          }
          
          let id_good_tag_p = document.createElement('p'); //Для подписи "id товара"
          id_good_tag_p.textContent = "id товара";
          characteristics_goods_tag_div.appendChild(id_good_tag_p);

          let id_goods_tag_p = document.createElement('p'); //Для вывода id товара
          id_goods_tag_p.textContent = array_good.id;
          characteristics_goods_tag_div.appendChild(id_goods_tag_p);

          let description_goods_tag_p = document.createElement('p'); //Для вывода описания товара
          description_goods_tag_p.textContent = array_good.description;
          description_goods_tag_p.setAttribute("id", "description_goods");
          characteristics_goods_tag_div.appendChild(description_goods_tag_p);

          for(let jj=0; jj<array_good.characteristic.length; jj++){
            array_characteristic = array_good.characteristic[jj];

            let characteristics_goods_tag_p = document.createElement('p');
            characteristics_goods_tag_p.textContent = array_characteristic.characteristic_name;
            characteristics_goods_tag_div.appendChild(characteristics_goods_tag_p);

            let characteristic_processors_tag_p = document.createElement('p');
            characteristic_processors_tag_p.textContent = array_characteristic.characteristic;
            characteristics_goods_tag_div.appendChild(characteristic_processors_tag_p);
          }

          let owners_tag_p = document.createElement('p');
          owners_tag_p.textContent = 'id владельца';
          characteristics_goods_tag_div.appendChild(owners_tag_p);

          let owners_id_tag_p = document.createElement('p'); //Вывод id владельца
          owners_id_tag_p.textContent = array_good.owner_id;
          characteristics_goods_tag_div.appendChild(owners_id_tag_p);
          
        }
    }
  }).catch(function(error) {
    console.log('Категории не получены', error);
  });

const url_owner = 'http://127.0.0.1:8000/owners/'
const modal_content_owners = document.querySelector(".modal_content_owners");

fetch(url_owner)
  .then((resp) => resp.json())
  .then(function(data) {
    for (let i=0; i<data.length; i++){
      let array_owners = data[i]; //Получение данных из массива

      let owners_id_tag_p = document.createElement('p');
      owners_id_tag_p.textContent = array_owners.id;
      owners_id_tag_p.setAttribute("class", "body_owners");
      modal_content_owners.appendChild(owners_id_tag_p);

      let owners_name_tag_p = document.createElement('p');
      owners_name_tag_p.textContent = array_owners.name;
      owners_name_tag_p.setAttribute("class", "body_owners");
      modal_content_owners.appendChild(owners_name_tag_p);

      let owners_surname_tag_p = document.createElement('p');
      owners_surname_tag_p.textContent = array_owners.surname;
      owners_surname_tag_p.setAttribute("class", "body_owners");
      modal_content_owners.appendChild(owners_surname_tag_p);

      let owners_patronymic_tag_p = document.createElement('p');
      owners_patronymic_tag_p.textContent = array_owners.patronymic;
      owners_patronymic_tag_p.setAttribute("class", "body_owners");
      modal_content_owners.appendChild(owners_patronymic_tag_p);

      let owners_email_tag_p = document.createElement('p');
      owners_email_tag_p.textContent = array_owners.email;
      owners_email_tag_p.setAttribute("class", "body_owners");
      modal_content_owners.appendChild(owners_email_tag_p);
    }
    
  }).catch(function(error) {
    console.log('Request failed', error);
  });


let modal = document.getElementById("myModal");
let modal_characteristics = document.getElementById("myModal_characteristics");
let modal_create_owner = document.getElementById("myModal_create_owner");
let modal_owners = document.getElementById("myModal_owners");

let btn = document.getElementById("modal_trigger");
let btn_characteristics = document.getElementById("modal_trigger_characteristics");
let btn_owner = document.getElementById("modal_trigger_create_owner");
let btn_owners = document.getElementById("modal_trigger_owners");

let span = document.getElementsByClassName("close")[0];
let span_characteristics = document.getElementsByClassName("close")[1];
let span_owner = document.getElementsByClassName("close")[2];
let span_owners = document.getElementsByClassName("close")[3];

btn.onclick = function() {
  modal.style.display = "block";
}

btn_characteristics.onclick = function() {
  modal_characteristics.style.display = "block";
}

btn_owner.onclick = function() {
  modal_create_owner.style.display = "block";
}

btn_owners.onclick = function() {
  modal_owners.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

span_characteristics.onclick = function() {
  modal_characteristics.style.display = "none";
}

span_owner.onclick = function() {
  modal_create_owner.style.display = "none";
}

span_owners.onclick = function() {
  modal_owners.style.display = "none";
}

window.addEventListener("keyup", function(e) {
    if (e.keyCode === 27) {
        modal.style.display = "none";
    }
})

window.addEventListener("keyup", function(e) {
  if (e.keyCode === 27) {
      modal_characteristics.style.display = "none";
  }
})

window.addEventListener("keyup", function(e) {
  if (e.keyCode === 27) {
      modal_create_owner.style.display = "none";
  }
})

// Get form element
const form_create_goods = document.querySelector('#create_goods');

// Add submit event listener
form_create_goods.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get data from form
  const appellation_good = form_create_goods.querySelector('#appellation_good').value;
  const description = form_create_goods.querySelector('#description').value;
  const category_name = form_create_goods.querySelector('#category_name').value;
  const owner_id = form_create_goods.querySelector('#owner_id').value;

  const url_category = 'http://127.0.0.1:8000/category/';

  fetch(url_category)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data)
      for (let i=0; i<data.length; i++){
        let array_data_category = data[i]; //Получение категорий из массива
        let name_category = array_data_category.appellation_category

        if (category_name == name_category){
          let category_id = array_data_category.id
          fetch('http://127.0.0.1:8000/good/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({appellation_good, description, category_id, owner_id})
          })
            .then((response) => response.json())
            .then(() => alert('Добавлен новый товар'))
            .catch((error) => console.error(error));
          }
        }
      })
  });

const form_create_characteristics = document.querySelector('#create_characteristics');

form_create_characteristics.addEventListener('submit', (event) => {
  event.preventDefault();

  const characteristic_name = form_create_characteristics.querySelector('#characteristic_name').value;
  const characteristic = form_create_characteristics.querySelector('#characteristic').value;
  const goods_id = form_create_characteristics.querySelector('#goods_id').value;

  fetch('http://127.0.0.1:8000/product_characteristic/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({characteristic_name, characteristic, goods_id})
  })
  .then((response) => response.json())
  .then(() => alert('Свойство добавлено'))
  .catch((error) => console.error(error));
});

const form_create_owner = document.querySelector('#create_owner');

form_create_owner.addEventListener('submit', (event) => {
  event.preventDefault();

  const surname = form_create_owner.querySelector('#surname').value;
  const name = form_create_owner.querySelector('#name').value;
  const patronymic = form_create_owner.querySelector('#patronymic').value;
  const email = form_create_owner.querySelector('#email').value;

  fetch('http://127.0.0.1:8000/owner/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({surname, name, patronymic, email})
  })
  .then(function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.text();
    }
    throw new Error(response.statusText);
  })
  .then(() => alert('Зарегистрирован новый владелец'))
  .catch(function() {
    alert('Что-то пошло не так, возможно владелец с указанной почтой уже существует');
  });
});