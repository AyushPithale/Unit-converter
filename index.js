
let inputEl = document.getElementById("input-el")
let conertBTn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let resetBtn =  document.getElementById("reset-btn")

conertBTn.addEventListener("click",function(){
    //console.log(inputEl.value)
    if (inputEl.value !== " "){
        lengthEl.innerHTML = `<span>
                                 ${inputEl.value} meter = ${(inputEl.value * 3.28084).toFixed(3)} feet  |  ${inputEl.value} feets = ${(inputEl.value * 0.3048).toFixed(3)} Meter
                             </span>`
        
        volumeEl.innerHTML =  `<span>
                                ${inputEl.value} liter = ${(inputEl.value * 0.264172).toFixed(3)} gallon  |  ${inputEl.value} gallon = ${(inputEl.value * 3.78541).toFixed(3)} liters
                              </span>`  
       
         massEl.innerHTML  = `<span>
                                ${inputEl.value} killo = ${(inputEl.value * 2.20462).toFixed(3)} pounds   |  ${inputEl.value} pound = ${(inputEl.value * 0.453592).toFixed(3)} killos
                             </span>` 
    }
});

resetBtn.addEventListener("click",function(){
     inputEl.value = ""
     lengthEl.innerHTML = `<span></span>` 
     volumeEl.innerHTML = `<span></span>` 
     massEl.innerHTML =  `<span></span>` 
});
 


