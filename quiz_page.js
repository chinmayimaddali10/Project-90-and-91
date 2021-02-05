player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;


document.getElementById("playerQuestion").innerHTML = "Question turn : " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer turn : " + player2Name;

function send() {
    number1 = document.getElementById("Num1").value;
    number2 = document.getElementById("Num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    number1 = document.getElementById("Num1").value = "";
    number2 = document.getElementById("Num2").value = "";

}