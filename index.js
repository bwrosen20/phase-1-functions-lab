function distanceFromHqInBlocks(someValue) {
    let value=Math.abs(someValue-42);
    return value;
}
function distanceFromHqInFeet (someValue) {
    let value=distanceFromHqInBlocks(someValue);
    let distance= 264*value;
    return distance;
    
}
function distanceTravelledInFeet(start,destination) {
    let distance=Math.abs(destination-start)*264;
    return distance;

}
function calculatesFarePrice(start,destination) {
    let distance=(Math.abs(start-destination))*264;
    if (distance<400){
        let price=0;
        return price;
    }
    else if (distance>=400 && distance<2000){
        let price=(distance-400)*0.02;
        return price;
    }
    else if (distance>=2000 && distance<2500){
        let price=25;
        return price;
    }
        else{
            let price='cannot travel that far';
            return price;
        }
    }
