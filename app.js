const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#button-change")
const message = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")
  




const availableNotes = [2000,500,100,20,10,5,1]
checkButton.addEventListener("click", function validateBillandCashAmount(){
    message.style.display = "none";
    if(billAmount.value >0){
        if (Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)
        }else{
            errorMessage("give money atleast equal to bill amount")
        }
    }else{
        errorMessage("invalid input")
    }
});

function calculateChange(amountToBeReturned){
    for (let i = 0 ; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function errorMessage(errorMessage){
    message.style.display = "block";
    message.innerText = errorMessage;
}

console.log(noOfNotes)