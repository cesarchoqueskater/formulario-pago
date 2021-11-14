const $inputSelected = document.querySelectorAll('.aria-input-visibility input')
const $btnPay = document.querySelector('.btn-pay')
const $ariaSelected = document.querySelector('.aria-input-visibility')
const $inputName = document.querySelector('#name')

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

export function cleanInputName() {
    $inputName.value = ''
}

export function removeAttr(isTrue) {
    if (isTrue) {
        $ariaSelected.removeAttribute('aria-selected', true)
    } else {
        $ariaSelected.setAttribute('aria-selected', true)
    }
}