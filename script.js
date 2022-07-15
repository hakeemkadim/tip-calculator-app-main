let personAmount = document.getElementById("personAmount");
let totalAmount = document.getElementById("totalAmount")
let input = document.getElementById("custom");
let reset = document.getElementById("rest");


//function to calculate the Tip with click on button
function check() {
    const billAmount =Number(document.getElementById("bill").value) ;
    const people = Number(document.getElementById("people").value);


    if (billAmount===0 ) {
        document.getElementById("ZeroBill").style.display = "block";
        return 0; 

    } else if (people===0) {
        document.getElementById("ZeroPeople").style.display = "block"; 
        return 0;

    } else if (billAmount===0 && people===0){
        document.getElementById("ZeroPeople").style.display = "block";
        document.getElementById("ZeroBill").style.display = "block"; 
        return 0;

    }
    else {
    document.getElementById("ZeroPeople").style.display = "none"; 
    document.getElementById("ZeroBill").style.display = "none"; 
    return 1;

    }
}
function tipCalc (tip ) {
    check();

    if (check()){
        const billAmount =Number(document.getElementById("bill").value) ;
    const people = Number(document.getElementById("people").value);

    let AmountForPersone=0;
    let totalOfAmount =0;
   

    AmountForPersone = (billAmount*tip)/people;
    totalOfAmount = billAmount*tip;

    personAmount.innerHTML = `$${Number(AmountForPersone).toFixed(2)}`

    totalAmount.innerHTML = `$${Number(totalOfAmount).toFixed(2)}`; 
    }else {
        document.getElementById("bill").value =0;
        document.getElementById("people").value=0
        personAmount.innerHTML = `$0`    
        totalAmount.innerHTML = `$0`; 
    }
    
}

//function to calculate the Tip inpute with keypress event

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    
    tipCalc(Number(document.getElementById("custom").value)/100)
    event.preventDefault();
  }
}); 



//reset 
reset.addEventListener("click",()=>{
    document.getElementById("bill").value =0;
    document.getElementById("people").value=0
    personAmount.innerHTML = `$0`    
    totalAmount.innerHTML = `$0`; 
})