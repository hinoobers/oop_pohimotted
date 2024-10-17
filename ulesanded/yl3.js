class Student {

    #name;
    #id;
    #status;
    constructor(nimi, id) {
        this.#name = nimi
        this.#id = id
        this.#status = "Active"
    }

    getId() {
        return this.#id
    }

    setName(nimi) {
        this.#name = nimi
    }

    getName() {
        return this.#name
    }

    setStatus(status) {
        switch(status) {
            case "Active":
                this.#status = status
                break
            case "Expelled":
                this.#status = status
                break
            case "Finished":
                this.#status = status
                break
            case "Inactive":
                this.#status = status
                break
            default:
                // Midagi ei tehta
                break
        }
    }

    getStatus() {
        return this.#status
    }



}

let test = new Student("Toomas", 3)
test.setStatus("Expelleda")
console.log(test.getStatus())