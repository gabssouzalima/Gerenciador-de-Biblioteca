import Livro from '../models/Livro.js';
import Usuario from '../models/Usuario.js';
import Biblioteca from '../models/Biblioteca.js';

const biblioteca = new Biblioteca();

const livros = [];
const usuarios = [];

const tabelaLivros = document.getElementById('tabelaLivros');
const selectLivro = document.getElementById('selectLivro');
const selectUsuario = document.getElementById('selectUsuario');
const mensagem = document.getElementById('mensagem');

function renderTabela() {
    tabelaLivros.innerHTML = '';

    livros.forEach(livro => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.estaDisponivel() ? 'Disponível' : 'Emprestado'}</td>
            <td>${livro.usuario ? livro.usuario.nome : '-'}</td>
        `;

        tabelaLivros.appendChild(tr);
    });
}

function atualizarSelects() {
    selectLivro.innerHTML = '<option value="">Selecione o livro</option>';
    selectUsuario.innerHTML = '<option value="">Selecione o usuário</option>';

    livros.forEach((livro, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = livro.titulo;
        selectLivro.appendChild(option);
    });

    usuarios.forEach((usuario, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = usuario.nome;
        selectUsuario.appendChild(option);
    });
}

// Cadastro de livro
btnCadastrarLivro.addEventListener('click', () => {
    const titulo = tituloLivro.value.trim();
    const autor = autorLivro.value.trim();

    if (!titulo || !autor) return;

    const livro = new Livro(titulo, autor);
    livros.push(livro);
    biblioteca.cadastrarLivro(livro);

    atualizarSelects();
    renderTabela();

    tituloLivro.value = '';
    autorLivro.value = '';
});

// Cadastro de usuário
btnCadastrarUsuario.addEventListener('click', () => {
    const nome = nomeUsuario.value.trim();
    if (!nome) return;

    const usuario = new Usuario(nome);
    usuarios.push(usuario);
    biblioteca.cadastrarUsuario(usuario);

    atualizarSelects();
    nomeUsuario.value = '';
});

// Emprestar
btnEmprestar.addEventListener('click', () => {
    if (selectLivro.value === '' || selectUsuario.value === '') {
        mensagem.textContent = 'Selecione um livro e um usuário.';
        return;
    }

    const livro = livros[selectLivro.value];
    const usuario = usuarios[selectUsuario.value];

    biblioteca.emprestarLivro(livro, usuario);
    livro.usuario = usuario;

    renderTabela();
});

// Devolver
btnDevolver.addEventListener('click', () => {
    if (selectLivro.value === '' || selectUsuario.value === '') {
        mensagem.textContent = 'Selecione um livro e um usuário.';
        return;
    }

    const livro = livros[selectLivro.value];
    const usuario = usuarios[selectUsuario.value];

    biblioteca.devolverLivro(livro, usuario);
    livro.usuario = null;

    renderTabela();
});
