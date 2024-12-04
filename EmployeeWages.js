	// use const to make variacble that will not change 
    const isPresent = 1;

    // let variable to find random number no. 0 or 1
    let employeeCheck = Math.floor(Math.random() * 2);
    
    if(employeeCheck === isPresent){
        console.log("Employee Present");
    }
    else{
        console.log("Employee Not Present");
    }