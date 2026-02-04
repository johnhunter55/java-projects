// To find area of circle
function areaCircle(radius) {
    return (radius * radius) * Math.PI;
}

let radius = areaCircle(2);

console.log(radius.toFixed(2));

// get a random password
let charatureList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*'];
function randomPassword() {
    let password = '';

    for (let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * charatureList.length);
        password += charatureList[random];
    }
    return password;

}

console.log(randomPassword())

// tax calculator
let tax = 7.5
let price = 5
function calculator() {
    let calculated = (tax / 100) * price;
    calculated = price + calculated;
    return calculated;

}

console.log(calculator())