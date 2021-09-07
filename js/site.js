// get values from the page

// controller function
function getValue() {

    let inputValue = document.getElementById("inputValue").value;

    let rewindValue = revereString(inputValue);

    displayString(rewindValue);
}

// reverse the array

// logic function
function revereString(inputValue) {

    let rewindString = [...inputValue];

    // // reverse a string using a for loop
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }

    return rewindString.reverse().join("");
}

// return the reversed value to the page.
// view function
function displayString(rewindValue) {
    
    // write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${rewindValue}`;

     // show alert box
    document.getElementById("alert").classList.remove("invisible");

}     