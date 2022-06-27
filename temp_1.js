var s = "Hello I am a chicken.";

var sArr = s.split(" ");
console.log(sArr);

var charArr = [];

for (var i = 0; i < sArr.length; i++) {
    charArr.push([]);
}

sArr.forEach((x, index) => {
    for (var i = 0; i < x.length; i++) {
        charArr[index].push(x[i]);
    }
});

console.log(charArr);
