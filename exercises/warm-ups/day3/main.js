var projector = {
    color: white,
    ports: 12,
    small: true,
}

var ducting = {
    material: aluminum,
    lengthMeters: 100,
    lengthFeet: 300,
    isExposed: true,
    write: function() {
        console.log("The" + this.material + "duct is" + this.lengthMeters + "meters long." )
    }
}

var vSchoolLogo = {
    geometric: true,
    points: 6,
    color: black,
    background: white,
}

var  monitor = {
    color: black,
    colorAccuracy: low,
    aspectRatio: fucked,
    brightness: normal, 
}