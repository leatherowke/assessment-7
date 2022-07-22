function addToZero (arr) {
   
    for(let i=0; i<arr.length; i++){
        for(let j = i + 1; j<arr.length; j++){ 
            
            // console.log(num)
            if( arr[i] + arr[j] === 0){
                answer = 'true'
                return answer
            }
            else{
                answer = 'false'
                return answer
            }
        }
    }
   
};


console.log(addToZero([1,-1]))




function uniqueChar(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

console.log(uniqueChar('monday'))

function pangram (arr) {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  function longestWord (str){
let strSplit = str.split(' ');
let longestWord = 0;

for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i] > longestWord){
        longestWord = strSplit[i]
    }
}  
return longestWord
}
// this will have a short run time when compared to the others due to not running a for loop inside another loop

console.log(longestWord('hi','hello'))