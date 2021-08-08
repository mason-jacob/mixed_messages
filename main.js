// Code that returns a random message composed of segments retrieved from 3 different arrays with 5 random options //

// Array of random numbers from 0 - 999 to use as desired in the message //
let rGNs = [];
for (let i = 0; i < 3; i++) {
    rGNs[i] = Math.floor(Math.random() * 1000);
}
// Segment 1 Options
let seg0 = ["It is a good day to ", "It is a great day to ", "If you want, you can ", "Make sure not to ", "Please do not " ]
let seg1 = [`eat ${rGNs[Math.floor(Math.random() * 3)]} apples, because `, `sleep for more than ${rGNs[Math.floor(Math.random() * 3)]}, due to the fact that `, `try something ${rGNs[Math.floor(Math.random() * 3)]} times, as `, `steal ${rGNs[Math.floor(Math.random() * 3)]} shoes, since `, `explore ${rGNs[Math.floor(Math.random() * 3)]} caves, seeing that `];
let seg2 = ["your Mom said so.", "it is fate.", "your dog wants you to.", "it is God's will.", "if you don't I am going to have to intervene."];
function generateMessage() {
    let message = "";
    let segments= [seg0[Math.floor(Math.random() * 5)], seg1[Math.floor(Math.random() * 5)], seg2[Math.floor(Math.random() * 5)]];
    message = segments.join('');
    return message;
}
console.log(generateMessage());