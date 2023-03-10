const animals = [
    {
        name: "cat", 
        sound: "meow",
         feedingRequrements: {
            food: 2,
            water: 3
        }
    },
    { name: "dog", sound: "woof" },
    { name: "Tom " }

];

function useAnimals(animal) {
    return [
        animal.name,
        function() {
            console.log(animal.sound);
        } 
    ];
}

export default animals;  
export {useAnimals} ;  