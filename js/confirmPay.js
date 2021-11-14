import { addDisabledInput, addDisabledButton, cleanInput, removeAttr, cleanInputName } from './addRemoveComponents.js'

const $name = document.querySelector('#name')
const $creditCard = document.querySelector('#number-credit-card')
const $dateExpired = document.querySelector('#date-expired')
const $cvv = document.querySelector('#cvv')
const $address = document.querySelector('#direction')

const $resultName = document.querySelector('.resultName')
const $resultNumberCreditCard = document.querySelector('.resultNumberCreditCard')
const $resultDateExpired = document.querySelector('.resultDateExpired')
const $resultCVV = document.querySelector('.resultCVV')
const $resultAddress = document.querySelector('.resultAddress')

const $btnPay = document.querySelector('.btn-pay')
const $htmlResult = document.querySelector('.resultPay')


// Confirmar pago
export default function clickButtonPay() {

    $btnPay.addEventListener('click', function(e) {
        let value = true

        if ($name.value.length == 0) {
            $resultName.innerText = 'El nombre esta incompleto o vacio'
            value = false
        } else {
            $resultName.innerText = ''
        }

        if ($creditCard.value.length !== 19) {
            $resultNumberCreditCard.innerText = 'El Número de la Tarjeta esta incompleto o vacio'
            value = false
        } else {
            $resultNumberCreditCard.innerText = ''
        }
        // debugger
        if ($dateExpired.value.length !== 5) {
            $resultDateExpired.innerText = 'La Fecha de Expiracion esta incompleto o vacio'
            value = false
        } else {
            $resultDateExpired.innerText = ''
        }
        // debugger

        if ($cvv.value.length !== 3) {
            $resultCVV.innerText = 'El CVV esta incompleto o vacio'
            value = false
        } else {
            $resultCVV.innerText = ''
        }

        // debugger
        if ($address.value.length == 0) {
            $resultAddress.innerText = 'La Direccion esta incompleto o vacio'
            value = false
        } else {
            $resultAddress.innerText = ''
        }
        // debugger

        if (value) {
            e.preventDefault()
            addDisabledInput()
            addDisabledButton()
            removeAttr()
            cleanInput()
            cleanInputName()
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