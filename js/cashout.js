document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutInput= document.getElementById('input-cash-out').value;
    const cashOutPin = document.getElementById('input-cashout-pin').value;
    if(cashOutPin === '1234')
        {
            const currentBalance= document.getElementById('current-balance').innerText;
            const cashOutInputNumber = parseFloat(cashOutInput);
            const currentBalanceNumber= parseFloat(currentBalance);
            const newBalance= currentBalanceNumber - cashOutInputNumber;
            document.getElementById('current-balance').innerText= newBalance;
            console.log(newBalance);

        }
        else
        {
            console.log('please try again');
        }
    
})