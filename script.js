const date = new Date();
const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

const month = monthFormatter.format(date); 
const day = dayFormatter.format(date);

var a = document.querySelector('.Date h1');
a.textContent = date.getDate();

var b = document.querySelector('.Day h2').textContent = day; 
var c = document.querySelector('.Month h1').textContent = month;
var d = document.querySelector('.Year h2').textContent = date.getFullYear();