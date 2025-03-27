
//get the input //

const input = document.getElementById("input");


function reverseString(str) {
    return str.split("").reverse().join("");
}

// get the value of the input 

function check() {
    const value = input.value
    const reverse = reverseString(value)
    alert(reverse)

    if (value == reverse) {
        alert("Yes!!! It is Palindrome")
    } else
        alert("No!!! It is not a Palindrome")
}

input.value = ""


