/*const form = document.querySelector('form');

const range = document.querySelector('#range');
const weight = document.querySelector(".value");
range.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value; 
    
    weight.textContent = tempSliderValue;
    
    const progress = (tempSliderValue / range.max) * 100;
 
    
});


'use strict';
// Define variables for range sliders
// Weight variables
var weightSlider = document.getElementById("range");//input range
var weightOutput = document.getElementById("inputWeight");//display input
// Height variables
var heightSlider = document.getElementById("range1");
var heightOutput = document.getElementById("inputHeight");
// Display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
// Update sliders in real time while dragging it
//weightSlider.oninput = function () {
 // weightOutput.innerHTML = this.value;
//}
//heightSlider.oninput = function () {
  //heightOutput.innerHTML = this.value;
//}
// Change weight-slider value on weight-number input
function showValWeight(newVal) {
  weightSlider.value=newVal;
};
// Change height-slider value on height-number input
function showValHeight(newVal) {
  heightSlider.value=newVal;
};
// *** Change number input when dragging slider ***
// Add 2 eventListeners for weight and input sliders
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
  var result = document.getElementById("result");
  if(weightOutput < 10){
    result.innerHTML = "Please enter a valid weight";
  }

}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}
// Calculate BMI
/*function calculateBmi(){
  var result = document.getElementById("result");
  if(weightOutput < 10){
    result.innerHTML = "Please enter a valid weight";
  }
  else if(heightOutput < 10){
    result.innerHTML = "Please enter a valid height"
  }
  else{

  }
}*/
var weightSlider = document.getElementById("range");//input range
var weightOutput = document.getElementById("inputWeight");//display input
// Height variables
var heightSlider = document.getElementById("range1");
var heightOutput = document.getElementById("inputHeight");
// Display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
/*
function showValWeight(newVal) {
  weightSlider.value=newVal;
};
// Change height-slider value on height-number input
function showValHeight(newVal) {
  heightSlider.value=newVal;
};*/
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;

}
const form = document.querySelector('form');
var check = document.getElementById("result");
function calculateBmi(){
form.addEventListener('submit',function(e){
  e.preventDefault();
  let a =  parseInt(weightOutput.value); 
  let b =  parseInt(heightOutput.value);

   const result1 =(a / ((b * b )/ 10000)).toFixed(2);
  check.innerHTML = "<b>Your BMI is:</b> " + result1; 

 if(result1 <= 18.5){
    check.innerHTML = "your bmi is within falls underweight range: " + result1;
  }
  else if(result1 >= 18.5 && result1 <= 24.9){
    check.innerHTML = "your bmi is within falls Healthy weight range: " + result1;
  }
  else if(result1 >= 25.0 && result1 <= 50.9){
    check.innerHTML = "your bmi is within falls  overweight range: " + result1;
  }
});
}

