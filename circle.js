import { Shape } from "./shape";


export class Circle extends Shape{
    constructor(color){
        super(color);
    }
    calculateArea(radius){
      const pi = 3.14;
      document.write("The area of the circle is:"+ radius*radius*pi);
    }
}