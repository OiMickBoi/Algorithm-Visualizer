export const bubbleSort = (array) => {
    const size = array.length;
    for (let i = 0; i < size-1; i++) {
        for (let j = 0; j < size-1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
        
    }
    return array;
};

// module.exports = { bubbleSort }