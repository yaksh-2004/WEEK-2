class Person{
    private name:string;
    constructor(name:string)
    {
        this.name=name;
    }
    set name1(newName:string)
    {
      if(newName.length>0)
      {
        this.name=newName;
      }

    }
    get name1()
    {
        return this.name;
    }
}

const person=new Person("Yaksh");
console.log(person.name1);
person.name1="Kirtan";
console.log(person.name1);