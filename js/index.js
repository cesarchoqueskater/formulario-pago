const $creditCard = document.querySelector('#number-credit-card')
const $dateExpired = document.querySelector('#date-expired')
const $cvv = document.querySelector('#cvv')
const $ariaSelected = document.querySelector('.aria-selected')
const $btnPay = document.querySelector('.btn-pay')

const $inputSelected = document.querySelectorAll('input')


showInputInformation()
validateLargeValue()
validateNumberCreditCard()


export function showInputInformation() {

    $ariaSelected.addEventListener('click', function() {
        console.log("Se hizo click !!!")
        removeDisabledInput()
        removeDisabledButton()
    })
}

export function validateNumberCreditCard() {
    $creditCard.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
}

export function validateLargeValue() {
    $dateExpired.addEventListener('keyup', function(e) {
        if (e.target.value.length == 2) {
            e.target.value = e.target.value + "/"
            return true
        }
    })
}

export function removeDisabledInput() {
    $inputSelected.forEach((item) => {
        item.removeAttribute('disabled')
    })
}

export function removeDisabledButton() {
    $btnPay.removeAttribute('disabled')
}