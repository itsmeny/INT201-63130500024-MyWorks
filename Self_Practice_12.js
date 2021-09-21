let letters = [...'Hello World'];
for (let [i, w] of letters.entries()) {
    console.log(i, w);
}

// letter.entries() return key , value for every entry in the array >> entries(): IterableIterator<[number, T]>;