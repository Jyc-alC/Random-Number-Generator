const step1 = Math.random(); // Generate a random number.
console.log(step1); // Log to console.
alert(`${step1} Generated randomly.`); // Alert the user.
alert(step1);
const step2 = step1 * 10; // Times the random number by 10.
console.log(step2); // Log to console
alert(`Times ${step1} by ten to make ${step2}.`); // Alert the user.
alert(step2);
const step3 = Math.floor(step2); // Round the number assigned in step2 down.
console.log(step3); // Log to console.
alert(`Round down ${step2} to make ${step3}.`); // Alert the user.
alert(step3);
const step4 = step3 + 1; // Take the rounded number from step 3 and add 1 to it.
console.log(step4); // Log to console.
alert(`Take the rounded number from ${step3} to make ${step4}.`); // Alert the user.
alert(step4);
alert("Finished!"); // Alert the user of program termination.
alert(`${step1}, ${step2}, ${step3}, ${step4}.`);