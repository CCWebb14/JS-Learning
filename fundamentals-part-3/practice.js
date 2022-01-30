/* Copyright 2016 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */
function onClick() {
    if (inputsAreEmpty()) {
      label_f1.textContent = 'Error: one or both inputs are empty.';
      return;
    }
    if (secondInputIsEmpty()) {
        label_f1.textContent = 'Error: one or both inputs are empty.';
        var addend2 = 0;
    }
    else {
        var addend2 = getNumber2();
    }
    var addend1 = getNumber1();
    var addend2 = getNumber2();

    let add7 = (a) => {
        let result = parseInt(a) + 7;
        return result;
    }
    label_f1.textContent = add7(addend1);

    let multiply = (a, b) => {
        let result = parseInt(a) * parseInt(b);
        return result;
    }
    label_f2.textContent = multiply(addend1, addend2);

    let capitalize = (a) => {
        let firstLetter = a.charAt(0);
        capFirstLetter = firstLetter.toUpperCase();
        restOfString = a.substr(1);
        return capFirstLetter + restOfString;
    }
    label_f3.textContent = capitalize(addend1);

    let lastLetter = (a) => {
        return a.slice(-1);
    }
    label_f4.textContent = lastLetter(addend1);
}
function inputsAreEmpty() {
    if (getNumber1() === '') {
      return true;
    } else {
      return false;
    }
}

function secondInputIsEmpty(){
    if (getNumber2 === '') {
        return true;
    }
    else {
        return false;
    }
}

  function getNumber1() {
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }

    var inputs = document.querySelectorAll('input');
    var label_f1 = document.querySelector('#func1');
    var label_f2 = document.querySelector('#func2');
    var label_f3 = document.querySelector('#func3');
    var label_f4 = document.querySelector('#func4');
    var button = document.querySelector('button');
    button.addEventListener('click', onClick);

  