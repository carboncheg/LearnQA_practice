function showTextLength() {
    let text = prompt('Введите текст');
    alert(text.length);
}
showTextLength();


function showTextLengthWithoutSpace() {
    let text = prompt('Введите текст');
    alert(text.replace(/ /g, '').length);
}
showTextLengthWithoutSpace();


function showOddOrEven() {
    let text = prompt('Введите текст');
    let l = text.length;
    switch(l % 2 === 0) {
        case true:
            alert('Количество символов в тексте чётное');
            break;
        default:
            alert('Количество символов в тексте нечётное');
    }
    // if (l % 2 === 0) {
    //     alert('Количество символов в тексте чётное');
    // }
    // else {
    //     alert('Количество символов в тексте нечётное');
    // }
}
showOddOrEven();


function showOddOrEven() {
    let text = prompt('Введите текст');
    let numMaxText = prompt('Введите максимально допустимую длину текста', 25);
    let textLength = text.length;
    switch(textLength > numMaxText) {
        case true:
            alert(`Длина текста превышает длину ${numMaxText} символов`);
            break;
    }
}
showOddOrEven();