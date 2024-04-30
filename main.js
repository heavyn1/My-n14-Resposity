let number1 = +prompt("birinchi sonni kiriting...");
let number2 = +prompt("ikinchi sonni kiriting...");
let ishora = +prompt("Amallarni tanlang " + "\n 1) +" + "\n 2) -" + "\n 3) *" + "\n 4) /");
let sum;
if (ishora === 1) {
    sum = number1 + number2;
    console.log(sum);
} else if (ishora === 2) {
    sum = number1 - number2;
    console.log(sum);
}

if (ishora === 3) {
    sum = number1 * number2;
    console.log(sum);
} else if (ishora === 4) {
    sum = number1 / number2;
    console.log(sum);
}