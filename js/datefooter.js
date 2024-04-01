const currentDate = document.getElementById('current-date');

const month = new Date().toLocaleString('pt-PT', { month: 'long' });
const year = new Date().getFullYear();

currentDate.innerHTML = month[0].toUpperCase() + month.slice(1) + ' ' + year;
