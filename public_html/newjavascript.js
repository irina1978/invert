function invers () {
    while (true) {
            var number = prompt('Введите трехзначное число', "");
            if (number === null) {
                alert('Вы вышли из программы');
                return;
            }
            if (number !== '' && !isNaN(number) && number !==Infinity && number >99 && number <1000) {
                alert('Вы ввели число ' +number);
                number = +number;
                break;
            }
            alert('Введите трехзначное число');
    }
    var curentNumber = number;
    var newNumber = 0;
    while (curentNumber > 0) {
        newNumber = newNumber * 10 + curentNumber % 10;
        curentNumber = Math.floor(curentNumber / 10);
    }
    alert(newNumber);
}
invers();