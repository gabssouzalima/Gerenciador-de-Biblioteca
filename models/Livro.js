// CLASSE LIVRO
// ======================
export default class Livro {
    #emprestado = false;

    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    marcarComoEmprestado() {
        if (this.#emprestado) {
            alert("Livro já está emprestado.");
        }
        this.#emprestado = true;
    }

    marcarComoDisponivel() {
        if (!this.#emprestado) {
            alert("Livro já está disponível.");
        }
        this.#emprestado = false;
    }

    estaDisponivel() {
        return !this.#emprestado;
    }
}
