class Shape {
    constructor(Circle, Triangle, Square) {
        this.Circle = Circle;
        this.Triangle = Triangle;
        this.Square = Square; 
    }
    render(){};
}
class Circle extends Shape {
    constructor(shapecolor){
    super(Circle)    
        this.shapecolor = shapecolor;
    }
    render(){
        return `<circle cx="50" cy="50" r="50" fill=${this.shapecolor} />`
    };
}
class Triangle extends Shape {
    constructor(shapecolor){
    super(Triangle)
        this.shapecolor = shapecolor;
    }
    render(){
        return `<polygon points="50 0, 100 100, 0 100" fill=${this.shapecolor} />`
    };
}
class Square extends Shape {
    constructor(shapecolor){
    super(Square)    
        this.shapecolor = shapecolor;
    }
    render(){
        return `<rect width="100" height="100" fill=${this.shapecolor} />`
    };
}
module.exports = {Shape, Circle, Triangle, Square}