1.
console.log(hello);
var hello = 'world';
// var hello
// console.log(hello) undefined
// hello = world

2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = haystack
// function test() undefined
// function test defined as
// var needle = 'magnet'
// console.log(needle) = 'magnet'

3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendam = supercool
// function print called
// brendan = only okay
// console.log brendan = only okay
// console.log bendan = super cool
// *turns out there is no call to function print, so in actuality supercool is the only print call to the console

4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// food = chicken
// logs chicken
// eat function called
// var food hoisted
// food set to half chicken
// console logs half chicken
// food set to gone, but doesnt return

5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// func mean called
// var food hoiseted
// food set to chicken
// food logged as chicken
// food set to fish
// food logged as fish
// food logged as undefined
// *Turns out, nothing happens here as mean is not defined as a function 

6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// log genre as undefined
// genre set to disco
// rewind function called
// genre hoisted
// genre set to rock
// genre logged as rock
// genre set to r&b
// genre logged as r&b
// genre sets back to disco outside of function
// genre logged as disco

7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo is not defined as a var so this will cause a syntax error
