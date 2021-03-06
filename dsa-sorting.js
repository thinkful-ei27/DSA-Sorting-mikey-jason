'use strict';

const dataset = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

//converts data set to number array
function convert(data) {
  let array = data.split(' ');
  array = array.map(number => Number(number));
  return array;
}

//swaps two integers
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

//quicksort algorithm
function qSort(array, start = 0, end = array.length, counter = 0) {
  counter++;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle, counter);
  array = qSort(array, middle + 1, end, counter);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

//mergesort
function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, arr);
}

function merge(left, right, arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {


    if (left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++];
    }
    else {
      arr[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    arr[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    arr[outputIndex++] = right[i];
  }
  return arr;

}

const newDataSet = [3, 5, 8, 12, 2, 1, 15];


function bucketSort(arr, max) {
  let end = arr.length;

  const newArray = [];
  for (let i = 0; i < max; i++) {
    newArray[i] = 'empty';
  }

  for (let i = 0; i < end; i++) {
    newArray[arr[i]] = arr[i];
  }
  return newArray;
}




//random sorter
//input: [1,2,3,4,5,6,7,8,9]
//output: [6,1,8,3,4,5,2,9,7]

//take the array
//start with a counter at 0
//make sure counter is less than length-1
//choose random array position floor(random % array.length)
//swap
// advance counter

function randomSort(orderedArr, counter = 0) {
  while (counter < orderedArr.length) {
    let switchSpot = Math.floor(Math.random() * orderedArr.length);
    swap(orderedArr, counter, switchSpot);
    counter++;
    return randomSort(orderedArr, counter);
  }
  return orderedArr;
}


//  20 books
// strings run
const unorderedBooksArr = ['Idioms are a wonderful part of the English',
  'Language that give it a lot of flavor',
  'They force people to know more than',
  'The literal meaning of words. Idioms are',
  'Commonly used phrases which have',
  'T meaning completely different than',
  'Their literal meaning. This can be',
  'Quite confusing to those who',
  'Aren\'t familiar with the idiom',
  'And those who are studying English',
  'Using this tool can be excellent',
  'Practice for students studying',
  'English as a second',
  'Language because it gives the',
  'Literal meaning of each',
  'Phrase. This allows them',
  'To see the phrase and its',
  'Toad Meaning at the same time',
  'While there are long idiom',
  'Lists available online, trying'
];

function normalizeTitles(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].replace(/[^A-Za-z]/g, '').toLowerCase();
  }
  return array;
}

function main() {
  // let array = convert(dataset);
  //console.log(mSort(array));
  // console.log(bucketSort(newDataSet, 15));
  // console.log(randomSort(mSort(array)));
  console.log(mSort(unorderedBooksArr));
}

main();


