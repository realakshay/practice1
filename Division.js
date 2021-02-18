function Division(x,y){
    
    // Here checking devide by zero error
    if(y===0) return "Infinite"
    
    // Checking whether any other error occured
    try{
        return x/y
    }catch(e){
        return "Something getting wrong"
    }
}
