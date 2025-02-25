class Rectangle{
    private width:number;
    private height:number;
    constructor(width:number,height:number)
    {
        this.width=width;
        this.height=height;
    }
 //here area property is read-only..bcz we haven't defined setter method..
    get area():number{
        return this.width*this.height;
    }
}
const rectangle=new Rectangle(10,20);
console.log("Area is: " + rectangle.area);