//create references to the pieces on the page that we'll need in order to grab the number list input and then put the result back on the page
const resultsContainer = document.getElementById('results')
const executeButton = document.getElementById('execute-button');
const numberInput = document.getElementById('numbers-input')

const quickSort = (list, start, end) => {
    if (start >= end){
        console.log("Returning because Start: " + start + " End: " + end)
        return
    }
    let pivotIDX = getRandomNumber(start, end)
    let pivotElement = list[pivotIDX]
    console.log("Quick sorting: " + list + " start: " + start + " end: " + end)
    
    //swap the random element with the last element in the sublist
    console.log("Swapping pivot element at index: " + pivotIDX + " with index " + end)
    let tmpIDX = list[pivotIDX]
    list[pivotIDX] = list[end]
    list[end] = tmpIDX

    //tracks elements which will be placed in the lesser than partition
    let lessThanPointer = start

    for (let i = start; i < end; i++){
        console.log("checking index: " + i)
        if (list[i] < pivotElement){
            console.log("We found an element to swap at element " + i + ". " + list[i] + " < " + pivotElement)
            //swap found element to the right-most portion of the lesser elements
            let tmpVal = list[i]
            list[i] = list[lessThanPointer]
            list[lessThanPointer] = tmpVal
            lessThanPointer++
            console.log("Less Than Pointer is at index: " + lessThanPointer)
        }
    }

    //move the pivot element to the right-most portion of the lesser elements
    let tmpVal = list[end]
    list[end] = list[lessThanPointer]
    list[lessThanPointer] = tmpVal
    quickSort(list, start, lessThanPointer -1)
    quickSort(list, lessThanPointer + 1, end)

}

//a helper function used to randomize the sort index selected
//this ensures the algorithm doesn't end up in the worst case where the selected 
//pivot element leads to unbalanced partitions
const getRandomNumber = (min, max) =>{
    const multiplier = Math.random();
    const randomNumber = min + multiplier * (max - min + 1)
    return Math.floor(randomNumber);
}

const clearResults = () =>{
    resultsContainer.innerText = ''
}

const printResult = results =>{
    if (results.length > 0){
        resultsContainer.innerText = "Sorted List: " + results
    } else {
        resultsContainer.innerText = "No numbers were detected. Did you enter a comma separated list of numbers?"
    }
}

executeButton.addEventListener("click",function(){
    clearResults();
    let inputValue = numberInput.value;     //grab the value input in the text box provided
    if (!inputValue){                       // check to see if a value was indeed entered, if not, use the placeholder
        inputValue = '25, 5, 10, 3, 1, 2'
    }
    //map the comma separated list provided into an array and then filter out any NaN values
    let filteredArray = inputValue.split(',').map(Number).filter(num => !isNaN(num))
    quickSort(filteredArray, 0, filteredArray.length - 1)
    printResult(filteredArray) // print them
    console.log(filteredArray) // I decided to leave all of the console logs in this script as it helped me understaned the flow of this algorithm
})
