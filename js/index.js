import { removeDisabledInput, removeDisabledButton, removeAttr } from './addRemoveComponents.js'
import clickButtonPay from './confirmPay.js'

const $creditCard = document.querySelector('#number-credit-card')
const $dateExpired = document.querySelector('#date-expired')
const $cvv = document.querySelector('#cvv')
const $ariaSelected = document.querySelector('.aria-input-visibility')


showInputInformation()
validateNumberCVV()
validateDateExpired()
validateNumberCreditCard()
clickButtonPay()


export function showInputInformation() {
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