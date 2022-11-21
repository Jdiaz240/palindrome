//global variables to attach and manipulate the DOM
let input = document.getElementById('input')
let answer = document.getElementById('answer')
let submit = document.getElementById('submit')

//function to take input and check to see if it is a palindrome
function checkInput() {
    //get the user input value and assign to a variable
    let userInput = input.value.toLowerCase() 
    //turn the input into an array and assign it to a variable
    // let forward = userInput.split('')
    //create a copy of the array and reverse it 
    // let reverse = [...forward].reverse()
    // console.log(forward)
    // console.log(reverse); 
    // //loop through original array
    // for (let i = 0; i < forward.length; i++) {
    //     //loop though the reversed array
    //     for (let j = 0; j < reverse.length; j++) {
    //         //compare each index of the two arrays
    //         if (forward[i] === reverse[j]) {
    //             //if the the arrays match put this response on the page
    //             answer.textContent = 'yes ' + userInput + ' is a palindrome'
    //         } else {
    //             //if the arrays do not match put this response on the page
    //             answer.textContent = 'no ' + userInput +' is not a palindrome'
    //         }
    //     }
    // }
    if (userInput === userInput.split('').reverse().join('')) {
        return answer.textContent = 'yes ' + userInput + ' is a palindrome';
    } else {
        return answer.textContent = 'no ' + userInput +' is not a palindrome'
    }
    
}

//when the user hits submit the checkinput function will be triggered
submit.onclick = checkInput