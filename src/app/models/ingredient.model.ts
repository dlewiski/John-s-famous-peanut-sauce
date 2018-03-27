export class Ingredient{
  constructor(public name: string, public amount: number, public amount_type: string){}
}

export const INGREDIENTS: Ingredient[] = [
  {name: "peanut butter", amount: 1, amount_type: "cup"},
  {name: "sugar", amount: 1, amount_type: "cup"},
  {name: "coconut milk", amount: 1, amount_type: "cup"},
  {name: "white vinegar OR rice wine vinegar OR apple cider vinegar", amount: 1, amount_type: "cup"},
  {name: "Thai red chili paste", amount: 1, amount_type: "tablespoon"},
];

export const INGREDIENTS2: Ingredient[] = [
  {name: "rice", amount: 1, amount_type: "cup"},
  {name: "marijuan", amount: 1, amount_type: "kilo"},
];

export const INGREDIENTS3: Ingredient[] = [
  {name: "betty crocker brownie mix", amount: 1, amount_type: "package"},
  {name: "caramel", amount: 4, amount_type: "pieces"},
];
