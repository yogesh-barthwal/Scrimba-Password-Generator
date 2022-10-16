const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let password11El = document.getElementById("password11")
let password12El = document.getElementById("password12")
let password21El = document.getElementById("password21")
let password22El = document.getElementById("password22")
let temp1=""
let temp2=""

function randomCharacter1() {

    for (let i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        temp1 += characters[randomIndex1]
        temp2 += characters[randomIndex2]

    }
    password11El.textContent = temp1
    password12El.textContent = "eg"+temp2
    temp1 = ""
    temp2 = ""
}
function randomCharacter2() {

    for (let i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        temp1 += characters[randomIndex1]
        temp2 += characters[randomIndex2]

    }
    password21El.textContent = temp1
    password22El.textContent = "eg"+temp2
    temp1 = ""
    temp2 = ""
}