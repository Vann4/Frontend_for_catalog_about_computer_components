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
        for(let j=0; j<array_data.good.length; j++){
          array_good = array_data.good[j]
          console.log(array_good)
          if (array_good.category_id == 1){
            console.log('gfg')
          }
        }
        // console.log(array_data)
    }
  }).catch(function(error) {
    console.log('Request failed', error);
  });