//create references to the parts of the page we'll need to make use of later
const numberInput = document.getElementById('numbers-input')
const executeButton = document.getElementById('execute-button')
const resultsContainer = document.getElementById('results')

//USAGE: you'll need both bubbleSort() and swap() in order for this algorithm to work. If you have both in your script, simply call bubbleSort() and pass it an array. It will return a sorted array.

//function to handle the swapping of values from index1 to index2
const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

//main sorting function, makes use of "swap()"
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++){ //iterate over every value in the array
        for (let index = 0; index < arr.length - i - 1; index++){ 
            //In the inner loop, we subrtract i from the inner loop because by the time 
            //the loop gets to the last item in the array, it will definitely be in its 
            //correct position. Therefore, on the next pass through, we can omit that index value
            //this has the effect of drastically reducing the number of iterations required
            if (arr[index] > arr[index + 1]){
                swap(arr, index, index + 1)
            }
        }
    }
    
    return(arr);    
}

const printResults = arr =>{
    console.log("Sorted Array: " + arr)
    if (arr.length > 0){
        resultsContainer.innerText = "Sorted Number List: " + arr
    } else {
        resultsContainer.innerText = "No numbers were detected. Did you enter a comma separated list of numbers?"
    }
}

executeButton.addEventListener("click",function (){
    let inputValue = numberInput.value;
    if (!inputValue){
        inputValue = '25,5,10,3,1,2';
    }
    
    const inputArray = inputValue.split(",").map(Number)
    const filteredArray = inputArray.filter(num => !isNaN(num))
    console.log("Input Array: " + filteredArray)
    let results = bubbleSort(filteredArray);
    printResults(results);
})
