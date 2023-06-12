function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber>42){
        return blockNumber - 42;
    }else{
       return 42 - blockNumber;
    }
  }
  


function distanceFromHqInFeet(blockNumber){
    if (blockNumber > 42){
        return (blockNumber - 42) * 264;
    }
    else {
        return (42 - blockNumber) * 264;
    } 
}

function distanceTravelledInFeet(b1, b2){
    if(b2 > b1){
        return ((b2-b1)*264);
    }else{
        return ((b1-b2)*264);
    }
}
function calculatesFarePrice(start, destination){
    let feet;
    if(destination > start){
        feet = (destination - start)*264;
    }else{
        feet = (start - destination)*264;
    }

    if(feet < 400){
        return 0
    }
    else if (feet > 2000 && feet < 2500){
        return 25;
    }
    else if(feet > 400 && feet <= 2000 ){
        return (feet - 400) * 0.02;
    }
    else if (feet > 2500){
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(34, 32));