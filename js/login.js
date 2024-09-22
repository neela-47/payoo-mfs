// console.log('Button clicking file added');
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('button clicked');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber==='6' && pinNumber==='1234')
    {
        console.log('you are logged in');
        window.location.href='./home.html'
    }
    else
    {
        console.log('Please enter correct phone or pin');
    }
})