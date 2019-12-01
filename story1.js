// got help from https://codepen.io/Pyremell/pen/ONgexd to use the data gotten from user

var questions = 14;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Please type a verb ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var animal = prompt('Please type an animal' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb2 = prompt('Please type a verb in present tense' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adverb = prompt('Please type an adverb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective3 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var verb3 = prompt('Please type a verb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var pluralnoun = prompt('Please type plural noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var person = prompt('Please type a person in the room' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var noun2 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var adjective= prompt('Please type a adjective' + questionsLeft);

alert('All done. Ready for the message?');

var sentence = "<h2>Have you been having problems with your " + adjective + " " + noun + "?" ;
sentence +=  "Try our " + adjective2 + " product!";
sentence += "Not only it " + verb + " like a " + animal + ", it " + verb2 + " better than ever before!" ;
sentence += "Scientist spent over " + number + " years " + adverb + " working on its " + adjective3 + " and new features.";
sentence += "It can " + verb3 + " " + pluralnoun + " without a single stain, and the " + person + "-approved  " + noun2 + " is guaranteed to make your life " + adjective3 + ".</h2>";





document.write(sentence);
