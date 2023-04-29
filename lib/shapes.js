class Shape {
    constructor(Circle, Triangle, Square) {
        this.Circle = Circle;
        this.Triangle = Triangle;
        this.Square = Square; 
    }
    render(){};
}
class Circle extends Shape {
    constructor(shape, shapecolor, text, textcolor){
    super(shape, shapecolor, text, textcolor)
        this.shape = shape;
        this.shapecolor = shapecolor;
        this.text = text;
        this.textcolor = textcolor;
    }
    render(){
        return '<circle cx="50" cy="50" r="50" />'
    };
}
class Triangle extends Shape {
    constructor(shape, shapecolor, text, textcolor){
    super(shape, shapecolor, text, textcolor)
        this.shape = shape;
        this.shapecolor = shapecolor;
        this.text = text;
        this.textcolor = textcolor;
    }
    render(){
        return '<polygon points="50 0, 100 100, 0 100"/>'
    };
}
class Square extends Shape {
    constructor(shape, shapecolor, text, textcolor){
    super(shape, shapecolor, text, textcolor)    
        this.shape = shape;
        this.shapecolor = shapecolor;
        this.text = text;
        this.textcolor = textcolor;
    }
    render(){
        return '<rect width="100" height="100" />'
    };
}
module.exports = {Shape, Circle, Triangle, Square}