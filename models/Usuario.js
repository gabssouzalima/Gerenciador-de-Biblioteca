// CLASSE USUARIO
// =======================
export default class Usuario {
    #livrosEmprestados = [];

    constructor(nome) {
        this.nome = nome;
    }

    adicionarLivro(livro) {
        if (this.#livrosEmprestados.includes(livro)) {
            alert("Usuário já possui este livro.");
        }
        this.#livrosEmprestados.push(livro);
    }

    removerLivro(livro) {
        const index = this.#livrosEmprestados.indexOf(livro);
        if (index === -1) {
            alert("Usuário não possui este livro.");
        }
        this.#livrosEmprestados.splice(index, 1);
    }

    possuiLivro(livro) {
        return this.#livrosEmprestados.includes(livro);
    }

    consultarQuantidadeLivros() {
        return this.#livrosEmprestados.length;
    }
}
