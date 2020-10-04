let itemCategory = document.querySelector('#itemCategory');
let inputItem = document.querySelector('#inputItem');
let btnAddItem = document.getElementById('btn-add-item');
btnAddItem.addEventListener('click', addNewItem);

function addNewItem(e) {
  e.preventDefault();

  let emptyHeading = document.getElementById('nodataheading');
  console.log(emptyHeading.innerHTML.toLowerCase().substring(0, 7));
  if (itemCategory.value === '' || inputItem.value === '') {
    let missingDetailsError = document.querySelector('#error');
    missingDetailsError.style.color = '#ff4d4d';
    missingDetailsError.innerHTML = 'Category and Item is mandatory. ';

    setTimeout(() => (missingDetailsError.innerHTML = ''), 3000);
  } else if (
    emptyHeading.innerHTML.toLowerCase().substring(0, 7) === 'nothing'
  ) {
    let heading = document.getElementById('nodataheading');

    emptyHeading.innerHTML = '';
    const newdiv = document.createElement('div');
    newdiv.className = 'card card-body float-left';
    heading.insertAdjacentElement('afterend', newdiv);

    const newHeading = document.createElement('h2');
    newHeading.className = 'title';
    newHeading.id = 'itemsCat';
    newdiv.appendChild(newHeading);

    let itemCat = document.getElementById('itemsCat');

    const newUL = document.createElement('ul');
    newUL.className = 'list-group';
    newUL.id = 'items';
    itemCat.insertAdjacentElement('afterend', newUL);

    let itemsUL = document.getElementById('items');

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.appendChild(document.createTextNode(inputItem.value));
    itemsUL.appendChild(listItem);

    itemCat.innerHTML = itemCategory.value;
  } else {
    console.log('dddd');
  }
}
