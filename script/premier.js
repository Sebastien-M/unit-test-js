function addition(a,b) {
    if(typeof(a) !== "number" || typeof(b) !== "number"){
        throw new Error("Expect int as parameter")
    }
    return a+b;
}