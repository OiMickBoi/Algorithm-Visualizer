// import { globalData } from './src/data.js';
import { bubbleSort } from './src/algs/sort.js';


export const globalData = [10, 20, 15, 25, 22, 30, 28];

document.getElementById('myButton').addEventListener('click', () =>{
    const sortedData = bubbleSort(globalData);
    console.log(sortedData);
})