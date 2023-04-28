class Shape {
    constructor(shape, shapecolor, text, textcolor) {
        this.shape = shape;
        this.shapecolor = shapecolor;
        this.text = text; 
        this.textcolor;
    }
}
class Circle extends Shape {
    constructor(shape, shapecolor, text, textcolor){
        super(shape, shapecolor, text, textcolor);
    }
}
class Triangle extends Shape {
    constructor(shape, shapecolor, text, textcolor){
        super(shape, shapecolor, text, textcolor);
    }
}
class Square extends Shape {
    constructor(shape, shapecolor, text, textcolor){
        super(shape, shapecolor, text, textcolor);
    }
}