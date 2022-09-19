//create a function to save text to the fields 
// create a function to change color of cells as time passes

$( document ).ready(function() {

var timeDisplayEl = $('#show-time');
console.log(timeDisplayEl)

function displayTime() {
var nowTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
timeDisplayEl.text(nowTime)
}

function addColor (){

$(".horizontal-time-segment").each (function(currentValue) {
console.log($(this)[0].id)
var currentHour = moment().hour()
console.log(currentHour)
if ($(this)[0].id < currentHour) {
    $(this).css("background-color","gray")
}
if ($(this)[0].id > currentHour) {
    $(this).css("background-color","green")
}

if ($(this)[0].id == currentHour) {
    $(this).css("background-color","red")
}

})
}
addColor()
setInterval(displayTime, 1000);
})


$(".save-btns").each (function(currentValue) {
    console.log($(this)[0].value)
    console.log($(this).val())
$(this).click(function(event){
    event.preventDefault();
    console.log(event.target.value)
    var text = $(`#text${event.target.value}`).val()
    console.log(text)
    localStorage.setItem(`${event.target.value}`, text);
    var time = $(`#time${event.target.value}`).val()
    console.log(time)
    localStorage.setItem(`#${time}`, text);
})


    
$("#text8").val(localStorage.getItem("8"));
$("#text9").val(localStorage.getItem("9"));
$("#text10").val(localStorage.getItem("10"));
$("#text11").val(localStorage.getItem("11"));
$("#text12").val(localStorage.getItem("12"));
$("#text13").val(localStorage.getItem("13"));
$("#text14").val(localStorage.getItem("14"));
$("#text15").val(localStorage.getItem("15"));
$("#text16").val(localStorage.getItem("16"));
$("#text17").val(localStorage.getItem("17"));

    
    })
    
