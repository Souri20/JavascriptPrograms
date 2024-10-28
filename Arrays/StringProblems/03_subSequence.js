const isSubsequence = (str1, str2) =>{
    
    for(let i=0; i<str1.length; i++){
        if(!str2.includes(str1[i])){
            return false
        }
    }
    return true
}


console.log(isSubsequence("axc", "ahbgdc"));


function isSubsequence(s1, s2) {
    let i = 0;
    for (let char of s2) {
        if (char === s1[i]) {
            i++;
        }
        if (i === s1.length) {
            return true;
        }
    }
    return false;
}
console.log(isSubsequence("abc", "ahbgdc")); 