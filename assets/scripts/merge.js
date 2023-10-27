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

let list = [356, 746, 264, 569, 949, 895, 125, 455]
//let list = [5,100,55,2]
let result = mergeSort(list)

console.log(result)