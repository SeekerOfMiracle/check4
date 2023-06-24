function sliceIntoChunks(array, Size) {
    const newOne = [];
    for (let i = 0; i < array.length; i += Size) {
        const chunk = array.slice(i, i + Size);
        newOne.push(chunk);
    }
    return newOne;
}
const array = [1,  4, 4,  6, 7, 5, 8, 9, 1, 10];
// console.log(sliceIntoChunks(array, 3));
// console.log(sliceIntoChunks(array, 4));
// console.log(sliceIntoChunks(array, 2));

function erraseDuplicates(array){
    return array.filter((value, index)=> array.indexOf(value) !== index);
}


console.log(erraseDuplicates(array));