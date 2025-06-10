import { ProductBook } from "../model/ProductBook";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService implements ProductRepository {
  private books: Array<ProductBook> = new Array<ProductBook>();

  create(productBook: ProductBook): void {
    this.books.push(productBook);
  }
  findAll(): Array<ProductBook> {
    return [...this.books];
  }
  findOne(id: number): ProductBook | null {
    const product = this.books.find((products) => products.id === id);
    return product ?? null;
  }
  delete(id: number): boolean {
    const productIndex = this.books.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      this.books.splice(productIndex, 1);
      return true
    }
    return false
  }
}
