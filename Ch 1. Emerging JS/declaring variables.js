// 1. Using const
const pizza = 36

console.log(pizza)  //const creates a variable that cannot be changed

// 2. Let (variable scoping)

// Without using let
var wear = "sweather"

if (wear){
    var wear = "shirt" //change the variable inside an if statement
    console.log(`Block: ${wear}`)
}

console.log(`Global: ${wear} \n\n`)  // The global variable was completely changed


// Using let
var wear = "sweather"

if (wear){
    let wear = "shirt"  //The variable was only declared inside the code block(if block)
    console.log(`Block: ${wear}`) 
}

console.log(`Global: ${wear} \n\n`)  //The global variable never changed


// 3. Template Strings
const fname = "Ray Bone"
const order = "chips masala"
const server = "Cathy"

console.log(`Hey ${fname},  
You order of ${order} was served by ${server}.
Thank you for ordering with us. \n\n`)  //It's easier to add variables in a string


// 4. Default Parameters (for a function arguments)

function greetings(name="Ruff Sydney"){
    console.log(`Hey ${name}`)
}

greetings() // Uses the default parameter
greetings("Charli Mutunga") // Uses the value given