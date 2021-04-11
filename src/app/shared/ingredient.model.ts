export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}

// TS offers a shortcut for the code above, which is:

// export class Ingredient {
//     constructor(public name: string, public amount: number){
//     }
// }