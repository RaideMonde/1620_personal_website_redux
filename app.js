function main(){
    let apple = 5;
    let orange = 8;
    let result;
    
    const booly = false;
    const announce = "I am the architect";
    
    if (apple === orange) {
        result = "They match!"
    } else {
        result = "no luck"      
    }
    console.log(result)  
    
    orange = 5;
    if (apple === orange) {
        result = "They match!"
    } else {
        result = "no luck"      
    }
    console.log(result)  
    
    for(let i in announce){
        console.log(announce[i])
    }
}

main()
