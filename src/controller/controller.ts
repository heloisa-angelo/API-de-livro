import type { Request, Response } from "express"
import {
    listarLivros,
    buscarLivro,
    criarLivro,
    atualizarLivro,
    removerLivro
} from "../service/services"

export const getLivros = (_req: Request, res: Response) => {
    res.json(listarLivros())
}


export const getLivro = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const livro = buscarLivro(id)

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" })
    }

    res.json(livro)
}


export const postLivro = (req: Request, res: Response) => {
    const { titulo, autor } = req.body
    const novo = criarLivro(titulo, autor)
    res.status(201).json(novo)
}


export const putLivro = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const atualizado = atualizarLivro(id, req.body)

    if (!atualizado) {
        return res.status(404).json({ erro: "Livro não encontrado" })
    }

    res.json(atualizado)
}


export const deleteLivro = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const removido = removerLivro(id)

    if (!removido) {
        return res.status(404).json({ erro: "Livro não encontrado" })
    }

    res.status(204).send()
}
