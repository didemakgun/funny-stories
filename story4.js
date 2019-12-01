var questions = 15;
var questionsLeft = ' [' + questions + ' questions left]';
var person = prompt('Please type a person in the room' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var name = prompt('Please type a name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var name2 = prompt('Please type a name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var place = prompt('Please type a place' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Please type a verb ending with ing' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var pluralanimal = prompt('Please type plural animal' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var pluralnoun = prompt('Please type plural noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var adjective3 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var noun = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var number2 = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var verb2 = prompt('Please type a verb ending with ed' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var noun2 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
alert('All done. Ready for the message?');

var sentence = "<h2>" + person + " " + name + " " + name2 + " was born in the year " + number + "." ;
sentence +=  "S/he was born in " + place + ", during a " + adjective + " and davestating war.";
sentence += "When s/he was a " + adjective2 + " child, s/he decited to  " + verb + "." ;
sentence += "Although " + pluralanimal + " and " + pluralnoun  + " were scare, his/her " + adjective3 + " parents gave every " + noun + " they had to help him/her acomplish her dreams." ;
sentence += "By the time she was " + number2 + ", s/he had already " + verb2 + " her first " + noun2 + ".</h2>";


document.write(sentence);
