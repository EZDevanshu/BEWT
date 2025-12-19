class DemoClass{
    constructor(name , age){
        this.name = name ;
        this.age = age;
    }
    gretting(){
        console.log(`my name is ${this.name} my age is ${this.age}`);
    }
}

const obj = new DemoClass('devanshu' , 19)

obj.gretting();
