export class Shape{
    constructor(color){
        this.color = color;
    }
    drawShape(){
         
    }
    calculateArea(length, width){
       document.write("Area of the shape is:" + this.length*this.width);
    }
    color_property(color){
         document.write("the color of the shape is" + this.color+".");
    }
}