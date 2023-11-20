let ul_category = document.querySelector('#category')
let characteristic_name_processors= document.querySelector('.characteristic_name_processors')

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
        let characteristic_name_processors_tag_h2 = document.createElement('h2');
        characteristic_name_processors_tag_h2.textContent = array_data.appellation_category;
        characteristic_name_processors_tag_h2.setAttribute("id", "processors")
        characteristic_name_processors.appendChild(characteristic_name_processors_tag_h2);

        for(let j=0; j<array_data.good.length; j++){
          array_good = array_data.good[j]
          // console.log(array_good)
          
          for(let jj=0; jj<array_good.characteristic.length; jj++){
            array_characteristic = array_good.characteristic[jj];
            console.log(array_characteristic)
            let characteristic_name_processors_tag_p = document.createElement('p');
            characteristic_name_processors_tag_p.textContent = array_characteristic.characteristic_name;
            characteristic_name_processors.appendChild(characteristic_name_processors_tag_p);

            if (array_characteristic.characteristic_name == 'Модель'){
              let characteristic_name_processors_tag_br = document.createElement('hr');
              console.log(characteristic_name_processors_tag_br);
              characteristic_name_processors_tag_p.before(characteristic_name_processors_tag_br);
            }

            let characteristic_processors_tag_p = document.createElement('p');
            characteristic_processors_tag_p.textContent = array_characteristic.characteristic;
            characteristic_name_processors.appendChild(characteristic_processors_tag_p);
          }
        }
        // console.log(array_data)
    }
  }).catch(function(error) {
    console.log('Request failed', error);
  });