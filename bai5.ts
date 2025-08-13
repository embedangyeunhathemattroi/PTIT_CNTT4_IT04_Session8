
function findFirstEvenAndMatch<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    return arr.find(item => {
  
        if (typeof item === "number" && item % 2 === 0) {
            return predicate(item);
        }
        return false;
    });
}

const numbersssss = [1, 3, 5, 8, 10, 12];

const result1 = findFirstEvenAndMatch(numbersssss, num => num > 5);
console.log(result1); 

const mixed: (number | string)[] = [1, "hello", 4, "world", 6];

const result2 = findFirstEvenAndMatch(mixed, item => typeof item === "number" && item > 4);
console.log(result2);

