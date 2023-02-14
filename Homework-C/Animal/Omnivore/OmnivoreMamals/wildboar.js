import Animal from "../../animals.js";

export default class Wildboar extends Animal{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
    }
    omnivoresAnimal (){
        console.log("Omnivores are animals that eat both plants and meat. The size of an animal does not determine what it eats. Some of the biggest animals eat only plants, and very tiny animals can be carnivores. An animal's digestive tract will be specially designed according to the food it eats.");
    }
}