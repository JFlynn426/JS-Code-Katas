function skiJump(mountain) {
    jump = Math.pow(mountain.length, 2) * 1.35
    switch (true) {
        case (jump < 10):
            return `${jump.toFixed(2)} metres: He's crap!`
            break
        case (jump < 25):
            return `${jump.toFixed(2)} metres: He's ok!`
            break
        case (jump < 50):
            return `${jump.toFixed(2)} metres: He's flying!`
            break
        default:
            return `${jump.toFixed(2)} metres: Gold!!`
            break
    }
}
function descendingOrder(n) {
    n = n.toString()
    n = n.split("")
    n = n.sort().reverse()
    n = n.join("")
    return parseInt(n, 10)
}