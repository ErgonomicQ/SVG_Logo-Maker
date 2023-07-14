// function circleChoice(context){
// context.beginPath();
// context.arc(150, 100, 50, 0, 2 * Math.PI)
// context.fill();
// }

// function triangleChoice(context){
//     context.beginPath();
//     context.moveTo(150, 50);
//     context.lineTo(100, 150);
//     context.lineTo(200, 150);
//     context.closePath();
//     context.fill();
// }

// function squareChoice(context){;
//     context.fillRect(100, 50, 100, 100)
// }

// module.exports = {
//     circleChoice,
//     triangleChoice,
//     squareChoice,
// };


class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render() method must be implemented in the child class');
    }
  }
  
  class Triangle extends Shape {
    render() {
      return '<polygon points="150, 18 244, 182 56, 182" ' + `fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return '<circle cx="150" cy="100" r="50" ' + `fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return '<rect x="100" y="50" width="100" height="100" ' + `fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  