function analyzeArray(arr){
    let average=arr.reduce((a,b)=>a+b)/arr.length;
    // spread (...) uses elements of array as arguments, rather than the array itself
    let min=Math.min(...arr);
    let max=Math.max(...arr);

    function obj(average,min,max,length){
        this.average=average;
        this.min=min;
        this.max=max;
        this.length=arr.length;
    }
    
    return new obj(average,min,max,arr.length);
}

module.exports=analyzeArray;