/*Маска формы ввода телефона*/
document.addEventListener("DOMContentLoaded", function () {// реализация кода после загрузки всей страницы

  let phoneInputs = document.querySelectorAll('input[data-tel-input]');  //находим все формы ввода телефона

  let getInputNumbersValue = function(input){
    return input.value.replace(/[^\d\+]/g, "");    //функция у значения value ищутся все символы (кроме +) не являющиеся цифрами и заменяет их на пустой символ
  }

  let onPhonePaste = function (e) {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
        let pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
            // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
            // formatting will be in onPhoneInput handler
            input.value = inputNumbersValue;
            return;
        }
    }
}

let onPhoneInput = function (e) {
  let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

  if (!inputNumbersValue) {
      return input.value = "";
  }

  if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
          // Attempt to input non-numeric symbol
          input.value = inputNumbersValue;
      }
      return;
  }




  /*let onPhoneInput = function(e) {    //функция обработчик события (получает значение при вводе в форму)
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input), //сохраняем в переменную только числа
      formattedInputValue = '';
      selectionStart = input.selectionStart,

     if (!inputNumbersValue) {
        return input.value = ""; //если введены не числа (только не числа) то очищаем поле ввода
     }*/



      //операторы РБ
       if (inputNumbersValue[0] == '8') { //если набрал 8
        let firstSymbol =  inputNumbersValue[0];
        formattedInputValue = firstSymbol + ' (0';
         if (inputNumbersValue.length > 1) { // если введена следующая цифра

        formattedInputValue += inputNumbersValue.substring(2,4) + ')'; //добавляем от 1 до 3 символов

      }
         if (inputNumbersValue.length>=5) {
        formattedInputValue += ' ' + inputNumbersValue.substring(4,7);// добавляем от 4 до 7 символов
      }
         if (inputNumbersValue.length>=7) {
        formattedInputValue += '-' + inputNumbersValue.substring(7,9);// добавляем от 7 до 9 символов
      }
        if (inputNumbersValue.length>=9) {
        formattedInputValue += '-' + inputNumbersValue.substring(9,11);// добавляем от 9 до 11 символов
      }

      } else if(inputNumbersValue[2] == '7'){
        let secondSymbol =  inputNumbersValue[2];
        formattedInputValue =  inputNumbersValue[0] + inputNumbersValue[1] + secondSymbol + '5' +' (0';

         if (inputNumbersValue.length>=5) {
        formattedInputValue += inputNumbersValue.substring(5,7)+ ') ';// добавляем от 4 до 7 символов
      }
         if (inputNumbersValue.length>=7) {
        formattedInputValue += inputNumbersValue.substring(7,10);// добавляем от 7 до 9 символов
      }
      if (inputNumbersValue.length>=10) {
        formattedInputValue += '-' + inputNumbersValue.substring(10,12);// добавляем от 7 до 9 символов
      }
      if (inputNumbersValue.length>=12) {
        formattedInputValue += '-' + inputNumbersValue.substring(12,14);// добавляем от 9 до 11 символов
      }

      }
        //операторы других стран

      else{
      formattedInputValue = inputNumbersValue.substring(0, 24);
     }
     input.value = formattedInputValue;



  }
  let onPhoneKeyDown = function (e) {
    // Clear input after remove last symbol
    let inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
        e.target.value = "";
    }
}



/*for ( i = 0; i<phoneInputs.length; i++) {
  let input = phoneInputs[i];  //перебираем циклом все input и устанавливаем слушателя событий
  input.addEventListener("input", onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
}*/
for (let phoneInput of phoneInputs) {
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
}
});
