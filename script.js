//Part 1 - Math and Math function
/*Step 1*/
/*var num;
num = window.prompt("Enter a number:");
if (num > 0) {
    window.console.log("Yes, The number  " + num + " is positive: ");
}
else {
    window.console.log("Sorry,You did this one wrong  " + num + "is a negative number");
    window.console.log("The positive version of the number is  " + Math.abs(num));
}*/
//Step 2
/*var num;
var result;
num = window.prompt("Enter a decimal value:");
result = Math.ceil(num);
window.console.log(result);*/
//Step 3
/*var num;
var result;
num = window.prompt("Enter a decimal value:");
result = Math.floor(num);
window.console.log(result);*/
/*Step 4*/
/*var input;
var i;
var largest;
var smallest;
input = window.prompt("Enter five numbers separated by commas:");
var numbers = input.split(",");
largest = numbers[0];
smallest = numbers[0];
for (i = 1; i < numbers.length; i = i + 1) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
window.console.log(largest);
window.console.log(smallest);*/
//Step5
/*var num;
var result;
num = window.prompt("Enter a number:");
result = Math.sqrt(num);
window.console.log(result);*/
//PART2
//Step 6
/*var today = new Date();
var currentdate = today.getDate();
window.console.log(currentdate);*/
//Step 7
/*var getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(2, 2017));*/
//var today = new Date();
//Step 8
/*var today = new Date();
var month = today.getMonth();
window.console.log(month);*/
//Step 9
/*var d = new Date();
var res = d.getDay();
window.console.log(d.getDay());
if (res == 0 || res == 6) {
    window.console.log("Weekend!");
}
else {
    window.console.log("Week day!");
}*/
//Step 10
/*var today = new Date();
var currentdate = today.getDay();
var res = currentdate - 1;
if (currentdate == 0) {
    window.console.log("Yesterday was Saturday");
}
else if (res == 0) {
    window.console.log("Yesterday was Sunday");
}
else if (res == 1) {
    window.console.log("Yesterday was Monday");
}
else if (res === 2) {
    window.console.log("Yesterday was Tuesday");
}
else if (res == 3) {
    window.console.log("Yesterday was Wednesday");
}
else if (res == 4) {
    window.console.log("Yesterday was Thursday");
}
else if (res == 5) {
    window.console.log("Yesterday was Friday");
}*/
//Step 11
/*var today = new Date();
var currentdate = today.getDay();
if (currentdate == 0) {
    window.console.log("Today is S");
}
else if (currentdate == 1) {
    window.console.log("Today is M");
}
else if (currentdate == 2) {
    window.console.log("Today is T ");
}
else if (currentdate == 3) {
    window.console.log("Today is W ");
}
else if (currentdate == 4) {
    window.console.log("Today is Th ");
}
else if (currentdate == 5) {
    window.console.log("Today is F  ");
}
else if (currentdate == 6) {
    window.console.log("Today is  S ");
}*/
//PART 3 - Conditional logic and looping operations
//Step 12
/*var x = window.prompt("Enter the first number");
var y = window.prompt("Enter the second number");
if (x > y) {
    window.alert("The larger number is" + x);
}
else {
    window.alert("The larger number is" + y);
}*/
//Step 13
/*var names = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var i;
var marks = ["80", "77", "88", "95", "68"];
for (i = 0; i < 5; i++) {
    if (marks[i] < 60) {
        window.console.log(names[i]);
        window.console.log("Grade F");
    }
    else if (marks[i] < 70) {
        window.console.log(names[i]);
        window.console.log("Grade D");
    }
    else if (marks[i] < 80) {
        window.console.log(names[i]);
        window.console.log("Grade C");
    }
    else if (marks[i] < 90) {
        window.console.log(names[i]);
        window.console.log("Grade B");
    }
    else if (marks[i] < 100) {
        window.console.log(names[i]);
        window.console.log("Grade A");
    }
}*/
//Step 14
/*var i;
for (i = 1; i <= 15; i++) {
    window.console.log(i);
    if (i % 2 === 0) {
        window.console.log("Its an even number");
    }
    else {
        window.console.log("Its an odd number");
    }
}*/
//Step 15
/*var i;
for (i = 1; i < 100; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
        window.console.log("FizzBuzz");
    }
    else if (i % 5 === 0) {
        window.console.log("Buzz");
    }
    else if (i % 3 === 0) {
        window.console.log("Fizz");
    }
    else {
        window.console.log(i);
    }
}*/
//PART 4 - The“ Hitchhiker’ s Guide to the Galaxy” Game
/*
var str = window.confirm("Are you ready to play our game?");
if (str == true) {
    window.console.log("Awesome, our hero is waiting!");
}
else {
    window.console.log("Too bad, we’ re going to play anyway because our hero desperately needs your help!");
}
window.alert("You are in a dark, dingy, and humid cave searchingfor the lost treasure of Captain Chingadera.You are disoriented, lost, hungry and extremely thirsty.You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left.Your back is against the wall…");
var res = window.prompt("Which direction would you like to head(please enter forward, left, or right).");
switch (res) {
case "forward":
    window.alert("You walk about 100 yards and safely make your way out of the cave.");
    break;
case "left":
    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
    break;
case "right":
    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever");
    break;
default:
    window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser. ");
    break;
}
do {
    var num = window.prompt("Please enter your ratings between 1 and 10");
    if (num > 5 && num <= 10) {
        window.alert("Thank you, we will continue to make improvements to the game");
    }
    else if (num > 0 && num <= 5) {
        window.alert("Whatever, you weren’t very good at this game anyway!");
    }
} while (num < 0 || num > 10);
*/
//Part 5
/*
var coinFlip = Math.random();
var choice = window.prompt("Enter H or T");
var result = "T";
if (coinFlip < 0.5) // Heads
    result = "H";
if (result == "H") {
    if (choice == "H") alert("The flip was heads and you choose heads...you win!");
    else alert("The flip was heads and you choose tails...you lose!");
}
else {
    if (choice == "H") alert("The flip was tails and you choose heads...you lose!");
    else alert("The flip was tails and you choose tails...you win!");
}

//Step 8
coinFlip = Math.round(coinFlip);
if (coinFlip) result = "H";

*/
//Part 6
/*
var coinFlip;
for (var i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip) console.log("Tails");
    else console.log("Heads");
}
*/
//Part 7
/*
var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) console.log("Heads");
    else console.log("Tails");
} while (coinFlip == 0)
*/
//Part 8
/*ar i;
var output;
for (i = 1; i < 7; i++) {
    output = "";
    for (j = 1; j <= i; j++) {
        output = output + "# ";
    }
    window.console.log(output);
}*/
//Part 9
/*
var i;
for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        window.console.log(i + " is even");
    }
    else {
        window.console.log(i + " is odd");
    }
}
*/