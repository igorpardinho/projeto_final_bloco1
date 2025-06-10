import { Product } from "./Product";

export class ProductBook extends Product {
  private _author: string;

  constructor(
    name: string,
    description: string,
    price: number,
    author: string
  ) {
    super(name, description, price);
    this._author = author;
  }

  get author(): string {
    return this._author;
  }

  set author(author: string) {
    this._author = author;
  }
}
