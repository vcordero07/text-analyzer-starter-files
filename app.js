// your code here!
//step 1 get the value form the text area
//step 2 get convert the input to array
//do a input.split(' ')
//separate commas and dots
//do a array.length of each words
//get word count
//get unique word count
//get average word length
//
let strTxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lorem ipsum dolor eiusmod elit magna aliqua.";


let getWords = strRaw => {
    //console.log(str.replace(/[\.,:-]+/g, '').split(' '));
    return strRaw.replace(/[\.,:-]+/g, '').split(' ').sort();
};



let getWordsTotal = str => {
    // console.log(str);
    let result;
    let words = getWords(str);
    let wordAvg = 0;
    let wordCount = words.length;
    let wordFrequencies = {};


    //get wordFrequencies
    //console.log(words);
    for (let i = 0; i <= words.length; i++) {
        if (words[i] in wordFrequencies) {
            wordFrequencies[words[i]]++;
        } else {
            wordFrequencies[words[i]] = 1;
        }
    }
    //console.log(wordFrequencies);




    //get the average word length
    //console.log(wordCount);
    for (let i = 0; i < wordCount; i++) {
        wordAvg += words[i].length;
    }
    let avgLen = wordAvg / wordCount;
    //console.log(avgLen);




    return result;

};

getWordsTotal(strTxt);
