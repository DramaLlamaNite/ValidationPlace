// this function runs once the file is linked.
validationEventListener();

var mainDiv = document.getElementsByTagName('main')[0];

/*
  the responses can be adjusted here to change what messages appear
  once the button is pressed. So long as a comma seperates the
  messages as many can be added as wanted.
  NOTE make sure any " symbols within the message itself are prefaced 
  by a backslash like so:
  "He said, \"I like pies!\""
  otherwise the message will be cut short and probaly stop the script itself
*/
var responses = [
    "You are valid",
    "Your life has worth,<br>unconditional worth",
    "You deserve to feel happiness.<br>Without guilt, nor worry",
    "Your existence is not a mistake",
    "<strong><em>You are valid</em></strong>"
];

function validationEventListener(){
    var validateBtn = document.getElementsByTagName('button')[0];
    // javascript finds the button, and then an event listener is 
    // added that will fire when the button is clicked.
    // The button is told to fade away and after 1.5 seconds
    // the messages start firing.
    validateBtn.addEventListener('click', function(){ 
        fadeOutBtn(this);
        setTimeout(function(){validate(0);}, 1500);
    });
}

function fadeOutBtn(element){
    if(element.classList.contains('buttonActive')){
        return;
    }
    element.className = "center buttonActive fadeOut";
}

// All messages are played one after the other.
function validate(message){
    changeMessage(responses[message]);
    message++;
    if(responses.length == message){
        // once the message run out the button is restored.
        setTimeout(restoreValidationBtn, 9000);
        return;
    }
    setTimeout(function(){validate(message);}, 7400);
}

function changeMessage(text){
    mainDiv.innerHTML = "<p class='center fadeInThenOut'>" + text + "</p>";
}

function restoreValidationBtn(){
    mainDiv.innerHTML = "<button class='center fadeIn'>validate</button>";
    validationEventListener();
}
