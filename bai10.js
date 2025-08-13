// Hàm generic T để xử lý câu đầu vào
function findLongestUniqueWord(sentence) {
    // Tách câu thành mảng từ
    const words = sentence.split(" ");
    // Hàm kiểm tra từ có ký tự trùng hay không
    const hasUniqueChars = (word) => {
        const charSet = new Set(word); // Set chỉ giữ ký tự duy nhất
        return charSet.size === word.length;
    };
    // Lọc các từ không chứa ký tự trùng
    const uniqueWords = words.filter(hasUniqueChars);
    // Tìm từ dài nhất
    let longestWord = "";
    for (const word of uniqueWords) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
// ====== Test thử ======
console.log(findLongestUniqueWord("hello world apple banana orange pumpkin cucumber"));
// Kết quả: "orange"
