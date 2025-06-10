import readlineSync from "readline-sync";
import { ProductService } from "./service/ProductService";
import { ProductBook } from "./model/ProductBook";

const productService = new ProductService();
while (true) {
  console.log("digite a opção desejada: ");
  console.log(
    "1 - cadastrar um livros / 2 - ver todos os livros / 3 - buscar um livro por id / 4 - deletar um livro / 0 - sair"
  );
  let opcao = readlineSync.questionInt();
  if (opcao === 0) {
    break;
  }
  switch (opcao) {
    case 1:
      console.log("digite o nome do livro: ");
      const name: string = readlineSync.question();

      console.log("digite uma descrição para o livro: ");
      const description: string = readlineSync.question();

      console.log("digite o preço para o livro: ");
      const price: number = readlineSync.questionFloat();

      console.log("digite o autor do livro: ");
      const author: string = readlineSync.question();

      const book: ProductBook = new ProductBook(
        name,
        description,
        price,
        author
      );
      productService.create(book);
      break;

    case 2:
      console.log(`todos os livros: `);
      const books = productService.findAll();
      console.log(books);
      break;

    case 3:
      console.log("digite o id para busca: ");
      const id = readlineSync.questionInt();
      const booEntity = productService.findOne(id);
      if (booEntity) {
        console.log(booEntity);
      } else {
        console.log("livro não encontrado");
      }
      break;
    case 4:
      console.log("digite o id para deletar um livro: ");
      const idDelete = readlineSync.questionInt();
      const bookDeleted = productService.delete(idDelete);
      if (bookDeleted) {
        console.log("livro deletado com sucesso!");
      } else {
        console.log("livro não encontrado");
      }
      break;

    default:
      console.log("opção inexistente");
  }
}
