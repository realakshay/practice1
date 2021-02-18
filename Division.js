function Division(x,y){
    if(y===0) return "Infinite"
    try{
        return x/y
    }catch(e){
        return "Something getting wrong"
    }
}