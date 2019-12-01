var questions = 11;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var pluralnoun = prompt('Please type plural noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var game = prompt('Please type a game' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var pluralnoun2 = prompt('Please type plural noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Please type a verb ending with ing' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb2 = prompt('Please type a verb ending with ing' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun2 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var plant = prompt('Please type a plant' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var bodypart = prompt('Please type a body part' + questionsLeft);
alert('All done. Ready for the message?');

var sentence = "<h2>A vacation is when you take a trip to some " + adjective + " place with your " + adjective2 + " family." ;
sentence +=  "Usually you go to some place that is near a/an " + noun + ".";
sentence += "A good vacation place is one where you can ride " + pluralnoun + " or play " + game + " or go hunting for " + pluralnoun2 +"." ;
sentence += "I like to spend my time " + verb + " or " + verb2 + "." ;
sentence += "Last summer I fell in a " + noun2 + " and got poison " + plant + " all over my " + bodypart + ".";
sentence +=  "I still like vacations though" + ".</h2>";


document.write(sentence);
