import Animal from "../../animals.js";

export default class Shark extends Animal{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
    }
    fishInfo (){
        console.log("Carnivorous fish are ones that get most of the energy that they need to survive from a meat-based diet. This can include insects, other fish, and other invertebrates (worms, snails, shrimp, etc.). Some predatory fish are active hunters that will either chase down prey, like sharks, or wait for the food to come to them.");
    }
    
}