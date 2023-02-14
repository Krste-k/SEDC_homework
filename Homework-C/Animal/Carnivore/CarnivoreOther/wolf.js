import Bear from "./bear.js";

export default class Wolf extends Bear{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
    }
    wolfInfo(){
        console.log("There are two widely recognized species of wolves in the world, the red and the gray. However, there is debate over how many species of wolf exist and if there are different subspecies of the gray wolf.");
    }
    wolfFamiy(){
        console.log("Wolves live in family groups called packs. A pack is usually made up of a male parent, a female parent and their pups from the last few years.");
    }

}