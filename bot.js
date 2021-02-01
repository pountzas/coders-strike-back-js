/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
let c = -20
let d = 500
    let xCorrection = 0
    let yCorrection = 0
    let degree = 12
while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    const opponentX = parseInt(inputs[0]);
    const opponentY = parseInt(inputs[1]);
    //const what = parseInt(inputs[2]);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    //console.error(what)
    console.error(nextCheckpointX)
    //console.error(y)
    //console.error(opponentY)
    
    if (x < nextCheckpointX && y < nextCheckpointY){
        if (nextCheckpointDist > 5000){
            xCorrection = c + d
            yCorrection = c + d
        }
        else if (nextCheckpointDist < 3000){
            xCorrection = -c//- d
            yCorrection = -c// - d
        }
    }
    else if (x < nextCheckpointX && y > nextCheckpointY){
        if (nextCheckpointDist > 5000){
            xCorrection = c + d
            yCorrection = -c - d
        }
        else if (nextCheckpointDist < 3000){
            xCorrection = -c// - d
            yCorrection = c// + d
        }
    }
    else if (x > nextCheckpointX && y > nextCheckpointY){
        if (nextCheckpointDist > 5000){
            xCorrection = -c -d
            yCorrection = -c -d
        }
        else if (nextCheckpointDist < 3000){
            xCorrection = c// +d
            yCorrection = c// +d 
        }
    }
    else if (x > nextCheckpointX && y < nextCheckpointY){
        if (nextCheckpointDist > 5000){
            xCorrection = -c -d
            yCorrection = c +d
        }
        else if (nextCheckpointDist < 3000){
            xCorrection = c// +d
            yCorrection = -c// -d
        }
    }

    else {
        xCorrection = 0
        yCorrection = 0
    }
    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    var result = (nextCheckpointX + xCorrection) + ' ' + (nextCheckpointY + yCorrection)
    if ( nextCheckpointDist > 5000){
        if (nextCheckpointAngle > -20 && nextCheckpointAngle < 20){
            console.log(result + ' 100 100');
            console.error (xCorrection) + "AAA"
        }
        else if (nextCheckpointAngle > -30 && nextCheckpointAngle < 30){
            console.log(result + ' 100');
        }
        else if (nextCheckpointAngle > -65 && nextCheckpointAngle < 65){
            console.log(result + ' 100');
        }
        else if (nextCheckpointAngle > -110 && nextCheckpointAngle < 110){
            console.log(result + ' 90');
        }
        else if (nextCheckpointAngle > -180 && nextCheckpointAngle < 180){
            console.log(result + ' 75');
        }
    }
    else if ( nextCheckpointDist > 8000 && nextCheckpointAngle > -30 && nextCheckpointAngle < 30){
        console.log(nextCheckpointX + ' ' + nextCheckpointY + "BOOST");
    }
    else if (nextCheckpointDist <= 6000 && nextCheckpointDist > 3000){
        if (nextCheckpointAngle > -20 && nextCheckpointAngle < 20){
            console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 100');
        }
        else if (nextCheckpointAngle > -30 && nextCheckpointAngle < 30){
            console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 100');
        }
        else if (nextCheckpointAngle > -65 && nextCheckpointAngle < 65){
            console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 100');
        }
        else if (nextCheckpointAngle > -90 && nextCheckpointAngle < 90){
            console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 85');
        }
        else if (nextCheckpointAngle > -180 && nextCheckpointAngle < 180){
            console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 60');
        }
    }
    else if (nextCheckpointDist <= 3000 && nextCheckpointDist > 1000){
        //console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 40');

        if (nextCheckpointAngle > -35 + degree && nextCheckpointAngle < 45 + degree){
            console.log(result + ' 100');
        }
        else if (nextCheckpointAngle > -55 + degree && nextCheckpointAngle < 65 + degree){
            console.log(result + ' 80');
        }
        else if (nextCheckpointAngle > -60 + degree && nextCheckpointAngle < 80 + degree){
            console.log(result + ' 65');
        }
        else if (nextCheckpointAngle > -110 + degree && nextCheckpointAngle < 130 + degree){
            console.log(result + ' 57');
        }
        else if (nextCheckpointAngle > -180 && nextCheckpointAngle < 180){
            console.log(result + ' 40');
        }
    }
    else if (nextCheckpointDist <= 1000){
        if (nextCheckpointAngle > -30 && nextCheckpointAngle < 30){
            console.log(result + ' 50');
        }
        else if (nextCheckpointAngle > -70 && nextCheckpointAngle < 70){
            console.log(result + ' 30');
        }    
        else {
        console.log(result + ' 25');
        }
        
    }
    /*else {
        console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 10');
    }*/
}
