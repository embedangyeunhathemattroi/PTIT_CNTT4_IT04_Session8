function findLongestUniqueWord(sentence) {
    const words = sentence.split(" ");
    let longest = null;

    for (const word of words) {
        let hasDuplicate = false;
        for (let i = 0; i < word.length; i++) {
            for (let j = i + 1; j < word.length; j++) {
                if (word[i] === word[j]) {
                    hasDuplicate = true;
                    break;
                }
            }
            if (hasDuplicate) break;
        }
        if (!hasDuplicate && (!longest || word.length > longest.length)) {
            longest = word;
        }
    }

    return longest;
}

const sentence = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestUniqueWord(sentence)); // "orange"
