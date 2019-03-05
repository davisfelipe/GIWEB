import {Router, Request, Response} from 'express'

const router = Router()

router.get('/',(req: Request,res: Response)=>{
    res.sendfile("./public/index.html")
})                                                                  
export default router