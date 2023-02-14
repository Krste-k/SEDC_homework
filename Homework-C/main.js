import Lion from "./Animal/Carnivore/CarnivoreCat/lion.js";
import Antelope from "./Animal/Herbivore/HerbivoreMamals/antelope.js";
import Wildboar from "./Animal/Omnivore/OmnivoreMamals/wildboar.js";
import Tiger from "./Animal/Carnivore/CarnivoreCat/tiger.js";
import Shark from "./Animal/Carnivore/CarnivoreFish/shark.js";
import Salmon from "./Animal/Carnivore/CarnivoreFish/salmon.js";
import Bear from "./Animal/Carnivore/CarnivoreOther/bear.js";
import Wolf from "./Animal/Carnivore/CarnivoreOther/wolf.js";
import RedDear from "./Animal/Herbivore/HerbivoreMamals/redDear.js";
import Parrot from "./Animal/Herbivore/HerbioveBirds/parrot.js";

const lion = new Lion ('Lion','carnivore','Cat',20,200);
console.table(lion);
lion.printAnimalInfo();
lion.carnivoreAnimalsInfo();
lion.CatInfo();
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");
const antelope = new Antelope('Antelope','Herbivore','Goat',15,50)
console.table(antelope);
antelope.printAnimalInfo();
antelope.antelopeInfo();
antelope.nekojafunkcija();
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const wildboar = new Wildboar( 'Wild Boar','Omnivore','pigs',20 ,250);
console.table(wildboar);
wildboar.printAnimalInfo();
wildboar.omnivoresAnimal();
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const tiger = new Tiger('Tiger','carnivore','Cat',25,150)
console.table(tiger);
tiger.printAnimalInfo();
tiger.carnivoreAnimalsInfo();
tiger.CatInfo();
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const shark = new Shark ('White Shark','carnivore','Fish',30,500);

console.table(shark);
shark.printAnimalInfo();
shark.carnivoreAnimalsInfo();
shark.fishInfo();
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");
const shark1 = new Shark ('Basking shark','carnivore','Fish',15,235);

console.table(shark1);
shark.printAnimalInfo();
shark.carnivoreAnimalsInfo();
shark.fishInfo();

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const salmon = new Salmon ('salomon','carnivore','Fish',2,10)
salmon.printAnimalInfo();
salmon.carnivoreAnimalsInfo();
salmon.fishInfo();
salmon.salmonInfo();
console.table(salmon);

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const bear = new Bear ('grizzly','carnivore','bear',30,800 );
console.table(bear);
bear.carnivoreAnimalsInfo();
bear.bearInfo();
bear.printAnimalInfo();

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const wolf = new Wolf ('black','carnivore','dog',14,35 )
console.table(wolf);
wolf.carnivoreAnimalsInfo();
wolf.printAnimalInfo();
wolf.wolfFamiy();
wolf.wolfInfo();

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const wolf1 = new Wolf ('Snow','carnivore','dog',18,55 )
console.table(wolf1);
wolf.printAnimalInfo();
wolf.wolfFamiy();
wolf.wolfInfo();
wolf.carnivoreAnimalsInfo();

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const dear = new RedDear ('Red Stag','Herbivore','cow',12,180)
console.table(dear);
dear.RedDearInfo();
dear.herbivoreAnimalInfo()
dear.printAnimalInfo()

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

const parrot = new Parrot ('amazon parrots','Herbivore','bird',4,3)
parrot.printAnimalInfo()
console.table(parrot);
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");
const parrot1 = new Parrot ('budgerigars','Herbivore','bird',8,0.5)
parrot1.printAnimalInfo()
console.table(parrot1);
console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");
const parrot2 = new Parrot ('cockatoos','Herbivore','bird',10,6.5)

parrot2.printAnimalInfo()

console.table(parrot2);

