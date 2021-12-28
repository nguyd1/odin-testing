function caesarCipher(str,n){
    res=str.split("");
    for(let i=0;i<res.length;i++){
        let isUpper=false;
        if(res[i]>='A' && res[i]<='z'){
            if(res[i]==res[i].toUpperCase()) isUpper=true;
            let c=str.charCodeAt(i)+n;
            if(isUpper && c>90) c=c-90+64;
            else if(!isUpper && c>122) c=c-122+96;
            res[i]=String.fromCharCode(c);
        }
    }
    return res.join("");
}

module.exports=caesarCipher;