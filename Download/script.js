
let modalkey = 0;

const c = (el)=> document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

roupaJson.map((item,index)=>{//mapear a div pizzaJson que esta no arquivo pizza.js
    let roupaItem = c('.modelos .roupa-item').cloneNode(true);//clonar as divs (modelos)vazias para preencher

    //selecionando os itens que irão preencher as divs clonadas
    pizzaItem.setAttribute('data-key', index); // identificar a pizza pelo key
    pizzaItem.querySelector('.roupa-item--img img').src = item.img; // preenche as informações na div clonada
    pizzaItem.querySelector('.roupa-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.roupa-item--desc').innerHTML = item.description;
  
}