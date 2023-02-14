import Animal from "../../animals.js";

export default class Antelope extends Animal{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
        
    }
    antelopeInfo(){
        console.log('They typically have a light, elegant figure, are slender, have graceful limbs, small cloven hoofs and a short tail.');
    }

    nekojafunkcija(){
        console.log("Herbivores are animals whose primary food source is plant-based. Examples of herbivores, include vertebrates like deer, koalas, and some bird species, as well as invertebrates such as crickets and caterpillars.");
    }
}