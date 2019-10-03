function decode(binary) {
    let morze = new Map([
        [".-", "a"],
        ["-...", "b"],
        ["-.-.", "c"],
        ["-..", "d"],
        [".", "e"],
        ["..-.", "f"],
        ["--.", "g"],
        ["....", "h"],
        ["..", "i"],
        [".---", "j"],
        ["-.-", "k"],
        [".-..", "l"],
        ["--", "m"],
        ["-.", "n"],
        ["---", "o"],
        [".--.", "p"],
        ["--.-", "q"],
        [".-.", "r"],
        ["...", "s"],
        ["-", "t"],
        ["..-", "u"],
        ["...-", "v"],
        [".--", "w"],
        ["-..-", "x"],
        ["-.--", "y"],
        ["--..", "z"],
        [".----", "1"],
        ["..---", "2"],
        ["...--", "3"],
        ["....-", "4"],
        [".....", "5"],
        ["-....", "6"],
        ["--...", "7"],
        ["---..", "8"],
        ["----.", "9"],
        ["-----", "0"],
        [".-.-.-", "."],
        ["--..--", ","],
        ["..--..", "?"],
        ["-..-.", "/"],
        [".--.-.", "@"],
        [" ", " "]
    ]);
    let space = binary.toString().replace(/\*+/g, "*");
    let str = "";
    let morzeCode = "";
    let masStr = [...space];
    let finalWord = "";
    masStr.forEach(function getChar(currentValue) {
        str = str + currentValue;
        if (str.includes("*")) {
            morzeCode = morzeCode + ", ,";
            str = "";
        }
        if (str.length === 2) {
            str === "10" ?
                (morzeCode = morzeCode + ".") :
                str === "11" ?
                (morzeCode = morzeCode + "-") :
                str === "00" ?
                (morzeCode = morzeCode + ",") :
                (str = "");
            str = "";
        }
    });
    morzeCode = morzeCode.replace(/,+/g, ",");
    let morzeCodeMass = morzeCode.split(",");
    morzeCodeMass.splice(0, 1);
    morzeCodeMass.forEach(function(currentValue, index) {
        finalWord = finalWord + morze.get(currentValue);
    });
    console.log(finalWord);
    return finalWord;
}

module.exports = {
    decode
};