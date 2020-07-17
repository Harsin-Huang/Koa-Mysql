import Router from 'koa-router'
import usersController from '../controller/user.js'
import articlesController from '../controller/article.js'
import utilController from '../controller/util.js'

let router = new Router()

// 用户接口
router.get('/userlist', usersController.list)
router.post('/adduser', usersController.create)
router.put('/edituser', usersController.update)
router.delete('/deleteuser', usersController.delete)
router.post('/login', usersController.login)

// 文章接口
router.get('/articlelist', articlesController.list)
router.post('/addarticle', articlesController.create)
router.put('/editarticler', articlesController.update)
router.delete('/deletearticle', articlesController.delete)

// 其它接口
router.post('/upload', utilController.save)

export default router
