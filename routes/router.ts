import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes',(req: Request,res: Response)=>{
    res.json({
        ok: true,
        mesaje: 'Todo esta bien!!'
    })
})

router.post('/mensajes/:id',(req: Request,res: Response)=>{
    
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        mesaje: 'POST - Todo esta bien!!',
        cuerpo,
        de,
        id
    })
})

export default router;