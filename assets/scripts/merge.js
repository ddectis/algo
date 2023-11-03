//USAGE: Call the mergeSort function with an array of numbers. This implementation is set up to allow users to input a list of 
//numbers as a usage example and then output the results to the page.
//I also left a lot of console logs in here because it helped me better understand how this algorithm works.

//create references to the pieces on the page that we'll need in order to grab the number list input and then put the result back on the page
const resultsContainer = document.getElementById('results')
const executeButton = document.getElementById('execute-button');
const numberInput = document.getElementById('numbers-input')


const merge = (left, right) =>{
    let result = [];
    console.log("merge called L: " + left + " R: " + right)
    while (left.length && right.length){
        //console.log("left and right have items")
        if (left[0] < right[0]){
            console.log("adding left: " + left[0])
            result.push(left.shift())
            console.log("result: " + result)
        } else {
            console.log("adding right: " + right[0])
            result.push(right.shift())
            console.log("result: " + result)
        }
    }

    if (left.length){
        console.log("Left still has items " + left)
        result.push(left[0])
        console.log("New Result: " + result)
        left.shift()
    }
    if (right.length){
        console.log("Right still has items " + right)
        result.push(right[0])
        console.log("New Result: " + result)
        right.shift()
    }

    return result
}

const mergeSort = items =>{
    console.log("Merge Sort Called " + items)
    if (items.length <= 1){
        console.log("Down to one item: " + items)
        return items
    }
    let middleIndex = items.length / 2
    let leftSplit = items.slice(0,middleIndex)
    let rightSplit = items.slice(middleIndex)
    console.log("Left Split: " + leftSplit)
    console.log("Right Split: " + rightSplit)

    let leftSorted = mergeSort(leftSplit)
    let rightSorted = mergeSort(rightSplit)

    return merge(leftSorted, rightSorted)
    
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

//attach an event listener to the execute button which will handle the logic of taking the user input, sorting it, and printing the result
executeButton.addEventListener("click",function() {
    clearResults(); //to begin with, ensure that the result container is empty. Otherwise if the user does 2+ executions without reloading the page, the old results will still be printed.
    let inputValue = numberInput.value;     //grab the value input in the text box provided
    if (!inputValue){                       // check to see if a value was indeed entered, if not, use the placeholder
        inputValue = '356, 746, 264, 569, 949, 895, 125, 455'
    }
    //map the comma separated list provided into an array and then filter out any NaN values
    const filteredArray = inputValue.split(',').map(Number).filter(num => !isNaN(num))
    let result = mergeSort(filteredArray) //sort the values
    printResult(result) // print them
    console.log(result) // I decided to leave all of the console logs in this script as it helped me understaned the flow of this algorithm
})



