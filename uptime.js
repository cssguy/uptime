var data = [
  {value: 91.56},
  {value: 91.52},
  {value: 91.51}
];

// $(".uptime_values").css("color", "grey"); 
// $("обращение к селектору: class или id").функция(работа над элементами, например изменение стилей, удаление эл-ов, добавление эл-ов)(значение);
// документация по jQuery - http://api.jquery.com/


/* Создаем тег p с классом medium_value */
$(".uptime_block").append("<p class='medium_value'></p>");

/* Создаем блок uptime_values */
$(".uptime_block").append("<div class='uptime_values'></div>")


/* Генерируем случайное значение от 90 до 100 */

var minNumber = 9000;
var maxNumber = 10000;
var porog_1 = 94;
var porog_2 = 96;

var magic = 7;
var sum = 0;

for (var i = 0; i < magic; i++) 
{
  var randomNumber = (Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber))/100;
  /* Вставляем значения случайных чисел в span элементы */
  $(".uptime_values").append("<span>" + randomNumber.toFixed(2) + "</span>"); 

  sum += randomNumber;
}

/* Выводим среднее значение полученных данных от 90 до 100 */
var medium_number = sum/magic;
$(".medium_value").append(medium_number.toFixed(2));

/* Меняем цвет значений в зависимости от результата */
if (medium_number < porog_1) {
  $(".medium_value").addClass("less_then_94");
} else if (medium_number < porog_2 && medium_number > porog_1) {
  $(".medium_value").addClass("less_then_96");
} else {
  $(".medium_value").addClass("less_then_100");
}
