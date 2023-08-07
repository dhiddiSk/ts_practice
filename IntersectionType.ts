type circle = {
    radius : number
}

type colour = {
    circleColor : string
}

type colourCircle = circle & colour;

const circleObject : colourCircle = {
    radius : 5,
    circleColor : "yellow"
}
