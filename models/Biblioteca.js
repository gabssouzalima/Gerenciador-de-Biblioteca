// CLASSE BIBLIOTECA
// =======================
export default class Biblioteca {
    #livros = [];
    #usuarios = [];

    cadastrarLivro(livro) {
        this.#livros.push(livro);
    }

    cadastrarUsuario(usuario) {
        this.#usuarios.push(usuario);
    }

    emprestarLivro(livro, usuario) {
        if (!this.#livros.includes(livro)) {
            alert("Livro não pertence a esta biblioteca.");
        }

        if (!this.#usuarios.includes(usuario)) {
            alert("Usuário não cadastrado na biblioteca.");
        }

        livro.marcarComoEmprestado();
        usuario.adicionarLivro(livro);
    }

    devolverLivro(livro, usuario) {
        if (!usuario.possuiLivro(livro)) {
            alert("Este usuário não possui este livro.");
        }

        livro.marcarComoDisponivel();
        usuario.removerLivro(livro);
    }
}
