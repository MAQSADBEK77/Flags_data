let info_parent = document.querySelector('.info-parent');   
let sort_parent = document.querySelector('.sort_parent');
let search_input = document.querySelector('#search_input');
fetch(`https://restcountries.com/v3.1/all`)
.then(response => response.json())
.then((data)=>{data.forEach(element => {api_info(element)})})
function api_info(element) {
info_parent.innerHTML += `
<div class="info-child"><div class="images">
<img class="bayroq" src="${element.flags.png}">
<img class="gerb d-n" src="${element.coatOfArms.png}"></div>
<div class="info-text">
<h1 class="name" >${element.name.common}</h1>
<div class="p-1 region">Joylashuvi: <span>${element.region}</span></div>
<div class="p-2">Poytaxti:<span>${element.capital}</span></div>
<div class="p-3">Aholisi: <span>${element.population}</span>
<div class="p-4">Maydoni :<span>${element.area} km²</span></div>
<div class="p-5 d-n">Chegaradoshlar :<span> ${element.borders}</span></div></div></div></div>`
opener()
console.log(element);}
let big_window = document.querySelector('.big_window')
function opener() {
let info_child = document.querySelectorAll(".info-child");
info_child.forEach(element => {
element.addEventListener('click', function () {
big_window.classList = 'd-f';
document.querySelector('.container').style.display = 'none'
big_window.innerHTML = `
<button onclick="x_active()" class="close_button">
<div class="div1"></div><div class="div2"></div>
</button>
<div class="big-display">
${element.innerHTML}</div>`
big_window.querySelector('.gerb').style.display = 'block'
big_window.querySelector('.p-5').style.display = 'block'})})}
function x_active() {
document.querySelector('.container').style.display = 'block'
big_window.classList = 'd-n';}
function sort_option(){
let regions = document.querySelectorAll('.region span')
regions.forEach(element => {
if (sort_parent.value === 'africa'){
if (element.innerText === 'Africa'){
element.parentElement.parentElement.parentElement.style.display = 'block'
} else {element.parentElement.parentElement.parentElement.style.display = 'none'}}
else if(sort_parent.value === 'asia')
if (element.innerText === 'Asia'){
element.parentElement.parentElement.parentElement.style.display = 'block'}
else{element.parentElement.parentElement.parentElement.style.display = 'none'}
else if(sort_parent.value === 'america')
if(element.innerText === 'Americas') {element.parentElement.parentElement.parentElement.style.display = 'block'}
else{element.parentElement.parentElement.parentElement.style.display = 'none'}
else if(sort_parent.value === 'antarctic')
if (element.innerText === 'Antarctic') {element.parentElement.parentElement.parentElement.style.display = 'block'}
else{element.parentElement.parentElement.parentElement.style.display = 'none'}
else if(sort_parent.value === 'europe')
if (element.innerText === 'Europe') {
element.parentElement.parentElement.parentElement.style.display = 'block'}
else{element.parentElement.parentElement.parentElement.style.display = 'none'}
else if(sort_parent.value === 'oceania')
if (element.innerText === 'Oceania') {element.parentElement.parentElement.parentElement.style.display = 'block'}
else{element.parentElement.parentElement.parentElement.style.display = 'none'}
else {element.parentElement.parentElement.parentElement.style.display = 'block'}})}
search_input.addEventListener('input', function(){
let search_input1 = document.querySelector('#search_input')
let names = document.querySelectorAll('.name')
names.forEach(element => {
if (element.innerText.toLowerCase().includes(search_input1.value.toLowerCase())) {
element.parentElement.parentElement.style.display = 'block'
}else{element.parentElement.parentElement.style.display = 'none'}})})
function dark_mode() {
document.body.classList.toggle("white_mode")
document.querySelector('select').classList.toggle('white_mode')
document.querySelector('form input').classList.toggle('white_mode')
document.querySelector('.night').classList.toggle('light')
document.querySelector('.close_button').classList.toggle('white_mode')}