document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const amountInput= document.getElementById('input-amount') .value;
    const pinInput= document.getElementById('input-pin') .value;
    console.log(amountInput, pinInput)

    if(pinInput === '1234')
    {
       const currentBalance= document.getElementById('current-balance').innerText;
       const amountInputNumber= parseFloat(amountInput);
       const currentBalanceNumber= parseFloat(currentBalance);
       const newBalance= amountInputNumber + currentBalanceNumber;
       console.log(newBalance);
       document.getElementById('current-balance').innerText= newBalance;
    }
    else{
        console.log('wrong pin. try again')
    }
})