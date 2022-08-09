import { Router } from "express";
import Client from "../models/client.js"

//rutas API-REST CLIENT

const router = Router();

router.get('/clients', async(req,res)=>{
    const getClients = await Client.find();
    res.status(200).send(getClients)
})

//GET FOR ID

router.get('/clients/:id', async(req,res)=>{
    try{
        const client = await Client.findOne({_id: req.params.id})
        res.send(client)
    }catch{
        res.send('¡Recurso no encontrado!')
    }
})

//POST
router.post('/clients', (req,res)=>{
    try{
        const client = new Client({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email
        })
    
        client.save();
        return res.status(201).send('Agregado!');
    }catch{
        res.status(404).send('¡Recurso no encontrado!')
    }
    
})

//UPDATE METHOD
router.patch('/clients/:id', async(req,res)=>{
    try{
        const client = await Client.findOne({_id: req.params.id})
        if(req.body.nombre) client.nombre = req.body.nombre
        if(req.body.apellido) client.apellido = req.body.apellido
        if(req.body.email) client.email = req.body.email

        client.save();
        return res.sendStatus(200);
    }catch{
        res.status(404).send('¡Recurso no encontrado!')
    }
})

//DELETE METHOD

router.delete('/clients/:id', async (req,res)=>{
    try{
        await Client.deleteOne({_id: req.params.id})
        res.sendStatus(200);
    }catch{
        res.status(404).send('¡Recurso no encontrado!')
    }
})

export default router;