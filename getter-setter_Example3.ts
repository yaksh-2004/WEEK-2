class Employee{
    private _fullName:string=" ";

    get fullName():string
    {
        return this._fullName;
    }
    //when we receive "Yaksh Parikh" as a string then it will update newName &_fullName with it and Yaksh Parikh wiil be logged as a 1st output..
    // when we receive "" as a string control will go to else and "INVALID ME" will be logged as a second output.
    // when we call getter method then _fullName is still filled with "Yaksh Parikh".. Hence Yaksh Parikh will be logged as a third output...
    set fullName(newName:string){
       if(newName && newName.length>0)
       {
         this._fullName=newName;
       }
       else{
       console.error("INVALID NAME");
       }
    }
}
const employee=new Employee();
employee.fullName="Yaksh Parikh";
console.log(employee.fullName);
employee.fullName="";
console.log(employee.fullName);