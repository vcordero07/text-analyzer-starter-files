let strTxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor eiusmod elit magna aliqua.";

let getWords = strRaw => {
    //console.log(str.replace(/[\.,:-]+/g, '').split(' '));
    return strRaw.replace(/[\.,:-]+/g, '').split(' ').sort();
};

//gets wordFrequencies
let getWFrequencies = arrWords => {
    let results = {};
    for (let i = 0; i <= arrWords.length; i++) {
        if (arrWords[i] in results) {
            results[arrWords[i]]++;
        } else {
            results[arrWords[i]] = 1;
        }
    }
    return results;
};

let getDistinctWords = str => {
    //   for (var i=0; i<words.length; i++) {
    //     console.log(distinct.indexOf(words[i]) === -1);
    //     if (distinct.indexOf(words[i]) === -1) {
    //       distinct.push(words[i]);
    //     }
    //   }
    distinct = new Set(str);
    console.log(distinct.size);
    return distinct.size;
};

let getWordsTotal = str => {
    // console.log(str);
    let result;
    let words = getWords(str);
    let wordAvg = 0;
    let wordCount = words.length;
    let wordFrequencies = getWFrequencies(words);
    let distinct = getDistinctWords(words);

    //console.log(wordFrequencies);

    //let wordsKey = Object.values(wordFrequencies)[0];
    //console.log(`wordsKey: ${wordsKey}`);

    //get the average word length
    //console.log(wordCount);
    for (let i = 0; i < wordCount; i++) {
        wordAvg += words[i].length;
    }
    let avgLen = wordAvg / wordCount;
    console.log(avgLen);

    console.log({
        wordCout: wordCount,
        uniqueWordCount: distinct,
        averageWordLength: avgLen,
    })

    let textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(wordCount);
    textReport.find('.js-unique-word-count').text(distinct);
    textReport.find('.js-average-word-length').text(avgLen + " characters");
    textReport.removeClass('hidden');

    //return result;
};

function analyzeTxt() {
    // $('.js-text-form').submit(function(event) {
    $('.js-text-form').submit(event => {
        event.preventDefault();
        // get the text the user submitted
        let userText = $(event.currentTarget).find('#user-text').val();
        //getWordsTotal(strTxt);
        getWordsTotal(userText);
    });
}

$(analyzeTxt());
