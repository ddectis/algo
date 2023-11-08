//create references to the pieces on the page that we'll need in order to grab the number list input and then put the result back on the page
const resultsContainer = document.getElementById('results')
const executeButton = document.getElementById('execute-button');
const numberInput = document.getElementById('numbers-input')
const textSearchKey = document.getElementById('text-search-input')

const linearSearch = (searchList, targetValue) =>{
    let matches = []
    let resultText = ''
    for (let i = 0; i < searchList.length; i++){
        console.log(searchList[i])
        if (searchList[i] === targetValue){
            matches.push(i)
        }
    }
    if (matches.length != 0){
        matches.forEach(match => {
            resultText += targetValue + " found at index " + match + ". "
        });
        return resultText
    } else {
        resultText = targetValue + " not found within list."
        return resultText
    }
}


const clearResults = () =>{
    resultsContainer.innerText = ''
}

const printResult = results =>{
    if (results.length > 0){
        resultsContainer.innerText = "Searched List: " + results
    } else {
        resultsContainer.innerText = "No numbers were detected. Did you enter a comma separated list of numbers?"
    }
}

executeButton.addEventListener("click",function(){
    clearResults();
    let inputValue = numberInput.value;     //grab the value input in the text box provided
    if (!inputValue){                       // check to see if a value was indeed entered, if not, use the placeholder
        inputValue = 'cherry, banana, apple, banana, cranberry, orange'
    }
    //map the comma separated list provided into an array
    let searchArray = inputValue.split(', ')
    console.log(searchArray)
    let searchKey = textSearchKey.value; //grab the search key
    if (!searchKey){ //and map the placeholder value if nothing has been entered
        searchKey = 'banana'
    }
    let results = linearSearch(searchArray, searchKey)
    printResult(results) // print them
    console.log(results) // I decided to leave all of the console logs in this script as it helped me understaned the flow of this algorithm
})
