let livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" }
]

let idCounter = 2

export function listarLivros() {
    return livros
}

export function buscarLivro(id: number) {
    return livros.find(l => l.id === id)
}

export function criarLivro(titulo: string, autor: string) {
    const novo = { id: idCounter++, titulo, autor }
    livros.push(novo)
    return novo
}

export function atualizarLivro(id: number, dados: any) {
    const livro = buscarLivro(id)
    if (!livro) return null

    livro.titulo = dados.titulo ?? livro.titulo
    livro.autor = dados.autor ?? livro.autor
    return livro
}

export function removerLivro(id: number) {
    const index = livros.findIndex(l => l.id === id)
    if (index === -1) return false

    livros.splice(index, 1)
    return true
}
