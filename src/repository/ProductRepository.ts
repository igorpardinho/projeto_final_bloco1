import { ProductBook } from "../model/ProductBook";

export interface ProductRepository {
  create(productBook: ProductBook): void;
  findAll(): Array<ProductBook>;
  findOne(id: number): ProductBook | null;
  delete(id: number): void;
}
