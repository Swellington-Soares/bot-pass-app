function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export default function generatePassword(){

    let characters: string[] = Array(255-33).fill(0).map((_, index: number) => {         
        return String.fromCharCode(index + 33) 
    })
    shuffle(characters);
    shuffle(characters);    

    return characters.slice(0, 12).join('');;
}