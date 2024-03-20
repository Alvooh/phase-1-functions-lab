//function to calculate distance from hq in blocks
function distanceFromHqInBlocks(dist){
    const hqDist = 42
    let result = dist - hqDist
    if(dist<hqDist){
        result= hqDist - dist
    }
    return result


}

//function to calculate distance in feet
function distanceFromHqInFeet(distance){
    let result = distanceFromHqInBlocks(distance) * 264
    return result
}

//function to calculate distance  travelled in feet
function distanceTravelledInFeet(start, stop){
    let distance;
    if(start>stop){
        distance  = start - stop;
    }
    else{
        distance  = stop - start;
    }
    let feet = distance * 264;
    return feet

}

//function to calculate distance in feet
function calculatesFarePrice(start, destination){
    let distInBlocks, distInFeet, farePrice

    if(start > destination){
        distInBlocks= start - destination
    }
    else {
        distInBlocks = destination - start
    }
    distInFeet = distInBlocks * 264
    if (distInFeet < 400){
        farePrice = 0
    }
    else if(distInFeet > 400 && distInFeet < 2000){

        farePrice = (distInFeet - 400) * 0.02 

    }
    else if(distInFeet > 2000 && distInFeet < 2500){
        farePrice = 25

    }
    else(
        farePrice = 'cannot travel that far'
    )
    return farePrice


}


distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)
