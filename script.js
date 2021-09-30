//Первое задание
document.getElementById('btnReplace').onclick = replacer;

let textFld = document.getElementById('textForReplace');

function replacer () {
    textFld.textContent = textFld.textContent.replace(/\B'|'\B/g, '"');
}

//Второе задание
let nameRegex = /^[a-zа-яё]+$/i;
let phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
let emailRegex = /^[\w._-]+@\w+\.[a-z]{2,4}$/i;

document.getElementById('submit').onclick = validateFields;

function validateFields(){
    let nameInput = document.getElementById('name');
    let nameValid = nameRegex.exec(nameInput.value);
    let nameError = 'Имя должно содержать только буквы';

    let phoneInput = document.getElementById('phone');
    let phoneValid = phoneRegex.exec(phoneInput.value);
    let phoneError = 'Номер должен соответствовать формату +7(000)000-0000';

    let emailInput = document.getElementById('email');
    let emailValid = emailRegex.exec(emailInput.value);
    let emailError = 'Email должен иметь вид "mymail@mail.ru", или "my.mail@mail.ru", или "my-mail@mail.ru"';

    function validate (field, regex, err) {
        if (!regex) {
            if (!document.getElementById(`${field.id}Error`)) {
                field.parentElement.insertAdjacentHTML("beforeend", `<p id="${field.id}Error" style="color: red">${err}</p>`)
                field.style.borderColor = 'red';
            }
        } else {
            if (document.getElementById(`${field.id}Error`)) {
                document.getElementById(`${field.id}Error`).remove();
                field.style.borderColor = '';
            }
        }
    }

    validate(nameInput, nameValid, nameError);
    validate(phoneInput, phoneValid, phoneError);
    validate(emailInput, emailValid, emailError);


    //Прерывание отправки формы
    return false;
}

