const generateButton = document.getElementById('generateButton') 
const link = document.getElementById('link')
const size = document.getElementById('size')
const omer = document.getElementById('omer')



generateButton.addEventListener('click', (e) => {
    e.preventDefault()
    omer.innerHTML = ''
    const finalLink = link.value
    setTimeout(() => {
        var qrcode = new QRCode(omer, {
            text:"https://wa.me/"+ finalLink + "?text=selam",
            width: size.value,
            height: size.value,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

       
    }, 1000)
   
})



