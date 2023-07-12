function circleChoice(context){
context.beginPath();
context.arc(150, 100, 50, 0, 2 * Math.PI)
context.fill();
}

function triangleChoice(context){
    context.beginPath();
    context.moveTo(150, 50);
    context.lineTo(100, 150);
    context.lineTo(200, 150);
    context.closePath();
    context.fill();
}

function squareChoice(context){;
    context.fillRect(100, 50, 100, 100)
}

module.exports = {
    circleChoice,
    triangleChoice,
    squareChoice,
};