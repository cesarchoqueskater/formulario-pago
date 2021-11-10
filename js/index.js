const $creditCard = document.querySelector('#number-credit-card')
const $dateExpired = document.querySelector('#date-expired')
const $cvv = document.querySelector('#cvv')
const $ariaSelected = document.querySelector('.aria-selected')
const $btnPay = document.querySelector('.btn-pay')

const $inputSelected = document.querySelectorAll('input')


showInputInformation()
validateNumberCVV()
validateDateExpired()
validateNumberCreditCard()
clickButtonPay()


export function showInputInformation() {
    $ariaSelected.addEventListener('click', function() {
        removeDisabledInput()
        removeDisabledButton()
    })
}

export function validateNumberCreditCard() {
    $creditCard.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
    });
}

export function validateDateExpired() {
    $dateExpired.addEventListener('input', function(e) {
        if (e.target.value.length == 2) {
            // e.target.value = aa.match(e.target.value).join('/')
            e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/')
            return true
        }
    })
}

export function validateNumberCVV() {
    $cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '')
    });
}


// Remove disabled input and button
export function removeDisabledInput() {
    $inputSelected.forEach((item) => {
        item.removeAttribute('disabled')
    })
}

export function removeDisabledButton() {
    $btnPay.removeAttribute('disabled')
}

//  Limpiar value input
export function cleanInput() {
    $inputSelected.forEach((item) => {
        item.value = ''
    })
}

// Confirmar pago
export function clickButtonPay() {
    $btnPay.addEventListener('click', function(e) {
        e.preventDefault()
        cleanInput()
    })
}