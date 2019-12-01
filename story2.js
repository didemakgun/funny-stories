var questions = 14;
var questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var time = prompt('Please type time' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun2 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var place = prompt('Please type a place' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var pluralnoun = prompt('Please type plural noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun3 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var noun4 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var celebrity = prompt('Please type a celebrity' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var number2 = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var number3 = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]'
var pluralanimal = prompt('Please type plural animal' + questionsLeft);

alert('All done. Ready for the message?');

var sentence = "<h2>Teachers, pardon the " + noun + ", I need to make  " + number + " " + adjective + " announcements.";
sentence +=  "Tomorrow at " + time + " there is going to be a " + adjective2 + " " + noun2 + " in the " + place + ".";
sentence += "All " + pluralnoun + " are invited, but juniors and seniors are required to come." ;
sentence += "We want to congratulate the " + noun3 + " " + noun4 + " team for the " + celebrity + " State Championship." ;
sentence += "They placed " + number2 + " in the state and " + number3 + " in the district. ";
sentence +=  "Congratulations " + pluralanimal + "!</h2>";


document.write(sentence);
