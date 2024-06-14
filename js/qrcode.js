// Seleção de elementos
const container =  document.querySelector('.container')
const qrCodeInput = document.querySelector('.qrcode-form input')
const qrCodeBtn = document.querySelector('.qrcode-form button')
const qrCodeImg = document.querySelector('#qrcode img')


// Functions
function generarQrCode() {
    const qrCodeInputValue = qrCodeInput.value
    if(!qrCodeInputValue) {
        alert('Digite a URL !!')
        return
    }
    
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeBtn.textContent = 'Gerando...'
    qrCodeImg.addEventListener('load', () => {
        container.classList.add('ativo')
        qrCodeBtn.textContent = 'Código criado!'
    })

    
    
    
}

// Eventos
qrCodeBtn.addEventListener('click', generarQrCode)

qrCodeInput.addEventListener('keyup', (e) => {
    if(e.key === 'Backspace' ) {
        qrCodeBtn.textContent = 'Gerar QR Code'
        container.classList.remove('ativo')
    }
})


qrCodeInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        generarQrCode()
    }
})