const $creditCard = document.querySelector('#number-credit-card')
const $dateExpired = document.querySelector('#date-expired')
const $cvv = document.querySelector('#cvv')
const $ariaSelected = document.querySelector('.aria-input-visibility')
const $btnPay = document.querySelector('.btn-pay')

const $inputSelected = document.querySelectorAll('.aria-input-visibility input')
const $htmlResult = document.querySelector('.resultPay')
const $resultNumberCreditCard = document.querySelector('.resultNumberCreditCard')
const $resultDateExpired = document.querySelector('.resultDateExpired')
const $resultCVV = document.querySelector('.resultCVV')



showInputInformation()
validateNumberCVV()
validateDateExpired()
validateNumberCreditCard()
clickButtonPay()


export function showInputInformation() {
    // debugger
    $ariaSelected.addEventListener('click', function() {
        if ($ariaSelected.getAttribute("aria-selected") == 'true') {
            removeDisabledInput()
            removeDisabledButton()
            removeAttr(true)
            return true
        } else {
            console.log("Entro en else")
            return true
        }
    })
}

function removeAttr(isTrue) {
    if (isTrue) {
        $ariaSelected.removeAttribute('aria-selected', true)
    } else {
        $ariaSelected.setAttribute('aria-selected', true)
    }
}


export function validateNumberCreditCard() {
    $creditCard.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
    });
}

export function validateDateExpired() {
    $dateExpired.addEventListener('input', function(e) {
        if (e.target.value.length == 2) {
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

export function addDisabledInput() {
    $inputSelected.forEach((item) => {
        item.setAttribute('disabled', true)
    })
}

export function addDisabledButton() {
    $btnPay.setAttribute('disabled', true)
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
        let value = true

        if ($creditCard.value.length !== 19) {
            $resultNumberCreditCard.innerText = 'El Número de la Tarjeta esta incompleto o vacio'
            value = false
        } else {
            $resultNumberCreditCard.innerText = ''
        }

        if ($dateExpired.value.length !== 5) {
            $resultDateExpired.innerText = 'La Fecha de Expiracion esta incompleto o vacio'
            value = false
        } else {
            $resultDateExpired.innerText = ''
        }

        if ($cvv.value.length !== 3) {
            $resultCVV.innerText = 'El CVV esta incompleto o vacio'
            value = false
        } else {
            $resultCVV.innerText = ''
        }

        if (value) {
            e.preventDefault()
            addDisabledInput()
            addDisabledButton()
            removeAttr()
            cleanInput()
            $htmlResult.innerHTML = '<p class="result-ok">Pago Correcto</p>'
            setTimeout(() => {
                $htmlResult.innerHTML = ''
            }, 2000)
            return true
        }
        e.preventDefault()
        $htmlResult.innerHTML = '<p class="result-error">Pago Incorrecto</p>'
        return true
    })
}