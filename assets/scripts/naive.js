//create references to the places on the page that we will make use of later in the script
const textBlockInput = document.getElementById("text-block-input");
const searchTextInput = document.getElementById("text-search-input");
const searchResultsHolder = document.getElementById("search-results");
const caseSensitive = document.getElementById("case-sensitive");
const searchButton = document.getElementById("search-button");
const firstChunkHolder = document.getElementById('first-chunk');
const answerHolder = document.getElementById('answer-chunk')
const lastChunkHolder = document.getElementById('last-chunk')

const pattern_search = (text, pattern, caseSensitive) =>{
    console.log("Input Text: " + text + " Input Pattern: " + pattern);
    let matchFound = false;
    let results = "";
    let firstChunk = "";
    let answerChunk = "";
    let lastChunk = "";
    
    
    if (!caseSensitive){
        text = text.toLowerCase();
        pattern = pattern.toLowerCase();
    }

    for (let i = 0; i < text.length; i++){
        console.log("Text Index: " + i);
        let matchCount = 0 
        for (let char = 0; char < pattern.length; char++){
            console.log("Pattern Index: " + char)
            if (pattern[char] === text[i + char]){
                console.log("match found");
                matchCount++
            } else {
                break
            }
        }
        if (matchCount === pattern.length){
            console.log(pattern + " found at index " + i)
            results += "Found " + pattern + " at character " + i + ". "
                                                                //split the input string into 3 chunks
            firstChunk = text.substring(0,i)                    //this is the string chunk prior to the index that begins the answer
            answerChunk = text.substring(i, i + pattern.length) //this is the found answer
            lastChunk = text.substring(i + pattern.length)      //this is the remaining portion of the search block
            matchFound = true;
            
        }
    }

    if (!matchFound){
        console.error("Text searched. Match not found.")
        results = "Text searched. Match not found."
    }

    searchResultsHolder.innerText = results
    firstChunkHolder.innerText = "Searched: " + firstChunk;
    answerHolder.innerText = answerChunk;
    lastChunkHolder.innerText = lastChunk;
    
}

const printResults = (text, index) =>{
    
}

searchButton.addEventListener("click", function() {
    searchResultsHolder.innerText = "";
    let text = textBlockInput.value;
    let pattern = searchTextInput.value
    console.log(textBlockInput.value)
    if (!textBlockInput.value){
        console.log("nothing entered")
        text = "BNAAANBANABABANBANANANABANBBNAAANBANANBNAAANBANB"
        
    }
    if (!searchTextInput.value){
        pattern = "BANANA"
    }
    
    pattern_search(text, pattern, caseSensitive.checked);
})



