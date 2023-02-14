import Animal from "../../animals.js";

export default class Lion extends Animal{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
        
    }
   
    CatInfo (){
        console.log("Scientists categorize big cats based on two specific qualities: they belong to the genus Panthera and have a special two-piece hyoid bone in their throat that allows them to roar. This limits the big cat club to just lions, tigers, leopards, and jaguars.");
    }

    
    
}