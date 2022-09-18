//create a function to save text to the fields 
// create a function to change color of cells as time passes
// 
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
//$(this)[0].backgroundColor="gray"
}
if ($(this)[0].id > currentHour) {
    $(this).css("background-color","green")
//$(this)[0].backgroundColor="gray"
}

if ($(this)[0].id == currentHour) {
    $(this).css("background-color","red")
//$(this)[0].backgroundColor="gray"
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
    var time = $(`#time${event.target.value}`).val()
    console.log(time)
    localStorage.setItem(`#time);
    localStorage.setItem(`#text);
})


    
$("#8.description").val(localStorage.getItem("8"));
//$("#9 .description").val(localStorage.getItem("9"));
//$("#10 .description").val(localStorage.getItem("10"));

    
    })
    
