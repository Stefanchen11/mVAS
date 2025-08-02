let title = document.querySelector('.page__title');
let titleText = title.innerHTML;
let monthArray = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

var today = new Date();
var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
var dayTomorrow = tomorrow.getDate(); 
var monthTomorrow = tomorrow.getMonth();
var yearTomorrow = tomorrow.getFullYear(); 

title.innerHTML = `${titleText} ${monthArray[monthTomorrow]} ${dayTomorrow}, ${yearTomorrow}`;


