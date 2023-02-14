export default class Animal {
    constructor(name, type, species, age, size) {
        this.name = name;
        this.type = type;
        this.species = species;
        this.age = age;
        this.size = size
    }

    printAnimalInfo() {
        console.log(`The ${this.name} is a ${this.type}, it belongs to the ${this.species} group. Their life span is ${this.age} years. There average weight is ${this.size} kg.`);

    }
    carnivoreAnimalsInfo() {
        console.log("A carnivore meaning 'meat eater' is an organism that derives its energy and nutrient requirements from a diet consisting mainly or exclusively of animal tissue, whether through predation or scavenging. Animals that depend solely on animal flesh for their nutrient requirements are called obligate carnivores while those that also consume non-animal food are called facultative carnivores. A carnivore that sits at the top of the food chain is termed an apex predator.");
    }

    herbivoreAnimalInfo() {
        console.log("A herbivore is an animal anatomically and physiologically adapted to eating plant material, for example foliage or marine algae, for the main component of its diet. As a result of their plant diet, herbivorous animals typically have mouthparts adapted to rasping or grinding. Horses and other herbivores have wide flat teeth that are adapted to grinding grass, tree bark, and other tough plant material.");
    }


}