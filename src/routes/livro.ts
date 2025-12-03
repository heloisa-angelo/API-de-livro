import express from "express"
import { getLivros, getLivro, postLivro, putLivro, deleteLivro } from "../controller/controller"

const router = express.Router()

router.get("/", getLivros)           
router.get("/listar", getLivros)     
router.get("/buscar", getLivro)      
router.get("/criar", postLivro)      
router.get("/atualizar", putLivro)   
router.get("/remover", deleteLivro)  

export default router
