let option = prompt(`
    Select an Option:
    Press 1 for Addition
    Press 2 for Subtraction
    Press 3 for Multiplication
    Press 4 for Division
    `)




if (option == 1) {
    let num1 = Number(prompt("Enter First Value"))
    let num2 = Number(prompt("Enter Second Value"))
    console.log(num1+num2)
    document.write
}
else if (option == 2) {
    let num1 = Number(prompt("Enter First Value"))
    let num2 = Number(prompt("Enter Second Value"))
    console.log(num1-num2)
}
else if (option == 3) {
    let num1 = Number(prompt("Enter First Value"))
    let num2 = Number(prompt("Enter Second Value"))
    console.log(num1*num2)
}
else if (option == 4) {
    let num1 = Number(prompt("Enter First Value"))
    let num2 = Number(prompt("Enter Second Value"))
    console.log(num1/num2)
}

else {
    // alert("Invalid Input")
    console.log("Invalid Input")
}