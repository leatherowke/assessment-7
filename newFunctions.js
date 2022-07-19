function addToZero (arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){ 
            if(i+j === 0){
                return true
            }
            else{
                return false
            }
        }
    }
};


function uniqueChar (arr){
for( let i = 0; i<arr.length; i++){
    if (i != '!@#$%^&*'){
        return false
    }
    else {
        return true
    }
}
};