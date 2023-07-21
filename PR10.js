function findCommonElements(arr1, arr2, arr3) { // difine the funcation
    let commonElements = []; //to store the all elements

    let i = 0,
        j = 0, //this 3 are connecting all three arrays
        k = 0;

    while (i < arr1.length && j < arr2.length && k < arr3.length) { // faciliteded
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) { // compare the same values in the all arrays
            commonElements.push(arr1[i]); // pushing the all the values into the storege array
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) { //comparing the values
            i++;
        } else if (arr2[j] < arr3[k]) { //comparing the values
            j++;
        } else { //comparing the values
            k++;
        }
    }

    return commonElements; // print the values
}

// Example usage:
const arr1 = [1, 5, 10, 20, 40, 80];
const arr2 = [6, 7, 20, 80, 100]; //this 3 is asigning the values in array
const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

const commonElements = findCommonElements(arr1, arr2, arr3); // again print the all 3 arrays
console.log(commonElements); //print the values