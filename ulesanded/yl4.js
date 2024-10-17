class Shape {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        this.color = color
    }

    getColor() {
        return this.color
    }

    getArea() {

    }
}

class Circle extends Shape{

    constructor(color, radius){
        super(color)

        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius
    }

    print() {
        return `Circle (r: ${this.radius}, color: ${this.color})`
    }
}

class Square extends Shape{

    constructor(color, side){
        super(color)

        this.side = side
    }

    getArea() {
        return this.side*this.side
    }

    print() {
        return `Square (a: ${this.side}, color: ${this.color})`
    }
}

class Rectangle extends Shape {
    constructor(color, length, width){
        super(color)

        this.length = length
        this.width = width
    }

    getArea() {
        return this.length*this.width
    }

    print() {
        return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.color})`
    }
}

class Paint {
    kujundid = []
    constructor(kujundid) {
        this.kujundid = kujundid
    }

    addShape(shape) {
        this.kujundid.push(shape)
    }

    getShapes() {
        return this.kujundid
    }

    calculateTotalArea() {
        let sum = 0
        this.kujundid.map(d => d.getArea()).forEach(a => sum += a)
        return sum
    }

    getCircles() {
        return this.kujundid.filter(a => a instanceof Circle)
    }

    getSquares() {
        return this.kujundid.filter(a => a instanceof Square)
    }

    getRectangles() {
        return this.kujundid.filter(a => a instanceof Rectangle)
    }
}

let a = new Circle("Must", 3)
console.log(`Circle: ${a.getArea() == (3*Math.PI)}`)

let b = new Square("Must", 4)
console.log(`Square: ${b.getArea() == 4*4}`)

let c = new Rectangle("Must", 5, 6)
console.log(`Rectangle: ${c.getArea() == (5*6)}`)

let d = new Paint([a, b, c])
console.log(d.calculateTotalArea())
console.log(d.getCircles())