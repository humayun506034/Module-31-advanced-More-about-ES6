const products = [
    
        { id: 1, name: "lenovo laptop", price: 65000 },
        { id: 2, name: "hp", price: 40000 },
        { id: 3, name: "mackbook", price: 165000 },
    

]
class product{
        //attribute/properties
        country ='bangladesh';
        //constructor method
        constructor(name){
                this.name=name;
        }
        //method
        speak(talk){
                console.log(`talking about ${talk}`);
        }
}

const lenovo=new product("Buy lenovo laptop");
console.log(lenovo);
lenovo.speak('Hi how are you?')