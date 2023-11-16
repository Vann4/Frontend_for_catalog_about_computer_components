let ul_category = document.querySelector('#category')

const url = 'http://127.0.0.1:8000/category/'

fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data)
    for (let i=0; i<data.length; i++){
        let array_data = data[i]; //Получение данных из массива
        let li_category = document.createElement('li');
        li_category.textContent = array_data.appellation_category
        ul_category.appendChild(li_category)
    }
  }).catch(function(error) {
    console.log('Request failed', error);
  });