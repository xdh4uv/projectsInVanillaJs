import { generate, count } from "random-words";



function paragraphGenerator(difficulty){
    if ( difficulty == 1 ){
        let paragraph = generate({exactly : 15, maxLength: 10000, join: " "});
        let letters_array = paragraph.split("")
        let paragraph_array = paragraph.split(" ")
        // let continued_paragraph = paragraph_array.split(" ")
        const getLength = (arr) =>{
            return arr.map(paragraph_array => paragraph_array.length)
        }; // we have used the map method. This, when used as array.map creates a new array populated with the results of calling a provided function on every element in the calling array
        const lengths = getLength(paragraph_array)
        // randomly capitalize letters and remember that strings are immutable in js
        // we have to change all the letters into array
        let randomCapitalization = letters_array.map((char)=>{
            return Math.random() > 0.8 ? char.toUpperCase() : char.toLowerCase()
        })
        
        const final_sentence = randomCapitalization.join("")
        console.log(final_sentence)
    }

    
   
}

paragraphGenerator(1)