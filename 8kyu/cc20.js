// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
// PREP
// P: have two input
// R: must return true if one input of the two equals to true, false if none or if both equal to true
// E: true, true should return false
// E: false, false should return false
// E: true, false should return true
// P: create function to take two inputs
function xor(a, b) {
    // define false scenarios
    if (a !== b) {
        return true
    } else {
        return false
    }
}