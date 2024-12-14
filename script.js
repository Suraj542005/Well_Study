function service() {
    alert("Sorry But Our Service's are Not Available Right Now");
}

function about() {
    alert("This Website is handel by Suraj");
}

// var textToPrint = "Hello, World!";
var outputElement = document.getElementById("output");
// outputElement.innerHTML = textToPrint;

var motivationalQuotes = {
    1: "Don't watch the clock; do what it does. Keep going.",
    2: "Believe you can and you're halfway there.",
    3: "The only way to do great work is to love what you do.",
    4: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    5: "The future belongs to those who believe in the beauty of their dreams.",
    6: "Your time is limited, don't waste it living someone else's life.",
    7: "Strive for progress, not perfection.",
    8: "Education is the most powerful weapon which you can use to change the world.",
    9: "Success is not in what you have, but who you are.",
    10: "The only place where success comes before work is in the dictionary.",
    11: "The journey of a thousand miles begins with one step.",
    12: "It always seems impossible until it's done.",
    13: "You are never too old to set another goal or to dream a new dream.",
    14: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    15: "The only person you are destined to become is the person you decide to be.",
    16: "You don't have to be great to start, but you have to start to be great.",
    17: "Success is stumbling from failure to failure with no loss of enthusiasm.",
    18: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    19: "Don't count the days, make the days count.",
    20: "You've got what it takes, but it will take everything you've got.",
    21: "Success is not just about making money. It's about making a difference.",
    22: "The only limit to our realization of tomorrow will be our doubts of today.",
    23: "The best way to predict the future is to create it.",
    24: "Dreams don't work unless you do.",
    25: "Be stronger than your excuses.",
    26: "You are the architect of your own destiny.",
    27: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    28: "The expert in anything was once a beginner.",
    29: "Learning is a treasure that will follow its owner everywhere.",
    30: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    31: "The only person you should try to be better than is the person you were yesterday.",
    32: "Set your goals high, and don't stop till you get there.",
    33: "You don’t need to be a genius to achieve success, you just need to be yourself.",
    34: "Success is the sum of small efforts, repeated day in and day out.",
    35: "Success is not in what you have, but who you have become.",
    36: "Your education is a dress rehearsal for a life that is yours to lead.",
    37: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    38: "The only limit to our realization of tomorrow will be our doubts of today.",
    39: "The only way to do great work is to love what you do.",
    40: "Don't stop when you're tired. Stop when you're done.",
    41: "The only source of knowledge is experience.",
    42: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    43: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    44: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    45: "Success usually comes to those who are too busy to be looking for it.",
    46: "It's not about how bad you want it. It's about how hard you're willing to work for it.",
    47: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    48: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    49: "Work hard, stay positive, and get up early. It's the best part of the day.",
    50: "Opportunities don't happen. You create them.",
};

// Displaying a random motivational quote
var randomIndex = Math.floor(Math.random() * 20) + 1;
var randomQuote = motivationalQuotes[randomIndex];
//   console.log(randomQuote);
outputElement.innerHTML = randomQuote;

function generate() {
    var randomIndex = Math.floor(Math.random() * 20) + 1;
    var randomQuote = motivationalQuotes[randomIndex];
    outputElement.innerHTML = randomQuote;
}