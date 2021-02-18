function Division(x,y){
    // Here checking devide by zero error
    if(y===0) return "Infinite"
    try{
        return x/y
    }catch(e){
        //Returning default error message
        return "Something getting wrong"
    }
}
