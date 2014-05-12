var myfacts = new Firebase('https://trivia-game.firebaseio.com/');
var questions_database;
var current_question=1;
var result=0;
var success=0;
var total_questions=6;


myfacts.on('value', function(snapshot) {
	console.log( snapshot.val());
	questions_database = snapshot.val();
Create_questions();
	return(questions_database);
});		

function Create_questions()
{
	var element = document.getElementById ('question');
	element.innerHTML=questions_database[(current_question-1)*6+1];

	var radio_a = document.getElementById('answer1');
	radio_a.innerHTML= questions_database[(current_question-1)*6+2];
	var radio_b = document.getElementById ('answer2');
	radio_b.innerHTML=questions_database[(current_question-1)*6+3];
	var radio_c = document.getElementById ('answer3');
	radio_c.innerHTML=questions_database[(current_question-1)*6+4];
	var radio_d = document.getElementById ('answer4');
	radio_d.innerHTML=questions_database[(current_question-1)*6+5];
	
	console.log(questions_database[1]);
}

function changeQuestion(answer) 
{var answer = document.forms[0].answer;
var selection;
var i;
for (i=0;i<answer.length;i++)
  {
  if (answer[i].checked)
    {
    selection=i+1;
    }
  }

console.log(selection);
checkAnswer(selection); 
current_question =current_question+1;
if(current_question==total_questions)
{current_question=1;
results_display();
}
else
{Create_questions();
updateMeter();	}
	//console.log("dropdownvalue =" + value);
	

}

function checkAnswer(answer)
{if(answer==questions_database[(current_question-1)*6+6])
{success=success+1;}
console.log('answer is'+ answer);
console.log('correct answer is'+ questions_database[(current_question-1)*6+6]);
console.log('success is' + success);

}

function updateMeter()
{ var progressbar=document.getElementById("progress_1");
progressbar.value=(current_question-1)*20;

}
function results_display()
{removestuff();
}
/*function removestuff() {
//var myWindow = window.open(../index.html, "_self");
 var myWindow_2= window.open("../html/trivia_2.html", "_self");
}
*/

function removestuff() {
    var elem = document.getElementById('submit_button');
    elem.parentNode.removeChild(elem);
	var elem = document.getElementById('selection_form');
    elem.parentNode.removeChild(elem);
	var elem = document.getElementById('progress_1');
    elem.parentNode.removeChild(elem);
	var element = document.getElementById ('question');
	
	element.innerHTML='Your result is '+ Math.floor(success/5*100)+'%';
	
	var element = document.getElementById ('current_image');
	
    return false;
}
