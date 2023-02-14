import Antelope from "./antelope.js";

export default class RedDear extends Antelope{
    constructor(name,type,species,age,size) {
        super(name,type,species,age,size)
        
    }
    RedDearInfo(){
        console.log("The red deer is Scotland's largest deer. Males have large, branching antlers, increasing in size as they get older. These impressive antlers can measure up to one metre in breadth and weigh as much as 15kg. Red deer are dark russet-brown in colour, with a paler buff rump patch and a pale tail.");
    }
}