//create references to the places on the page that we will make use of later in the script
const textBlockInput = document.getElementById("text-block-input"); 
const searchTextInput = document.getElementById("text-search-input");
const searchResultsHolder = document.getElementById("search-results");
const caseSensitive = document.getElementById("case-sensitive"); //a toggle to determine if the search should be case sensitive
const searchButton = document.getElementById("search-button");

//this function expects a text block to search, a pattern to look for, and a boolean to determine if the search is case sensitive
const patternSearch = (text, pattern, caseSensitive) =>{
    console.log("Input Text: " + text + " Input Pattern: " + pattern);
    let matchFound = false;
    let results = "";
    
    //the user has the option for the search to be case sensitive or not. If it is not case sensitive, we cast the search pattern and the search block to lower case
    if (!caseSensitive){
        text = text.toLowerCase();
        pattern = pattern.toLowerCase();
    }

    //look through each character in the provided search block
    for (let i = 0; i < text.length; i++){
        console.log("Text Index: " + i);
        let matchCount = 0 
        for (let char = 0; char < pattern.length; char++){ //for each character in the provided search block, check it against the pattern, if there is a match, check subsequent letters of the pattern.
            console.log("Pattern Index: " + char)
            if (pattern[char] === text[i + char]){
                console.log("match found");
                matchCount++
            } else {
                break
            }
        }
        //at this point, the inner loop has either matched sufficient characters to have found the pattern, or it has not. So we check
        if (matchCount === pattern.length){
            console.log(pattern + " found at index " + i)
            results += "Found " + pattern + " at character " + i + ". "
            matchFound = true;
        }
    }
    //by this point, we've checked every character of the search block, so we need to indicate if we've not yet found a match
    if (!matchFound){
        console.error("Text searched. Match not found.")
        results = "Text searched. Match not found."
    }

    return results;

}

const printResults = (results) =>{
    searchResultsHolder.innerText = results
}

searchButton.addEventListener("click", function() {
    searchResultsHolder.innerText = "";
    let text = textBlockInput.value;
    let pattern = searchTextInput.value
    console.log(textBlockInput.value)
    //place the placeholder values into variables for use if the user has not entered anything
    if (!textBlockInput.value){
        console.log("nothing entered")
        text = "BNAAANBANABABANBANANANABANBBNAAANBANANBNAAANBANB"
        
    }
    if (!searchTextInput.value){
        pattern = "BANANA"
    }
    
    const searchResults = patternSearch(text, pattern, caseSensitive.checked);
    printResults(searchResults);

})



