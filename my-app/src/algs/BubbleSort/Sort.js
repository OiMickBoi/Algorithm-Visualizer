function BubbleSort(array, size) {
    for (let i = 0; i < size-2; i++) {
        for (let j = 0; j < size-2; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
        
    }
}   
