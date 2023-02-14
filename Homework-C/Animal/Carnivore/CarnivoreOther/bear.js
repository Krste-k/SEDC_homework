import Animal from "../../animals.js";

export default class Bear extends Animal{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
    }
    
    bearInfo(){
        console.log("There are eight species: Asiatic black bears (also called moon bears), brown bears (which include grizzly bears), giant pandas, North American black bears, polar bears, sloth bears, spectacled bears (also called Andean bears), and sun bears.");
    }

}