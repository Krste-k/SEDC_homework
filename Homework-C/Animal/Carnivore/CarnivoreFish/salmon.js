import Shark from "./shark.js";

export default class Salmon extends Shark{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
    }
   salmonInfo(){
    console.log("Salmon fish is a large silver-coloured fish that lives in both freshwater and marine water which is consumed as food.");
   }
}