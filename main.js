const planets = ["mercury" , "venus" , "earth" , "mars" , "jupiter ", "saturn", "uranus", "neptune"]

const body = document.querySelector("body");
const script = document.querySelector("script")
const mainContent = document.createElement("div");
mainContent.setAttribute("id", "planets");

body.insertBefore(mainContent, script);


const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/


//another way
const planetE2 = document.getElementById("planets")
planets.forEach(planet => {
  let planetWriter = document.createElement("p")
  planetWriter.innerHTML = `${planet}`
  planetE2.appendChild(planetWriter)
  });




planets.forEach(function(string){
    // planetEl.innerHTML +=
    `<h2>${string}</h2>`

    newArray = planets.map(function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
     
      console.log(newArray);

      planetEl.innerHTML +=
      `<h2>${newArray}</h2>`;

      const filtered = newArray.filter(function(arguement){
        return arguement.includes("e")
     })
     planetEl.innerHTML +=
     `<h2>    ${filtered}  </h2>`

    });


      

  
   

    let reverseColors = planets.map((color) =>{
        let wordArray = color.split("");
        console.log("step one", wordArray);
        let firstLettter = color.charAt(0).toUpperCase();
        console.log("step two", firstLetter);
        return wordArray.join('');
        
        
      });
      console.long("step three",properPlanets);
    
    planets.map()
    


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

