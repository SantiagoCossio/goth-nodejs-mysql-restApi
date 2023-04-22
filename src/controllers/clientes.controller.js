import { json } from "express"
import { pool } from "../db.js"

export const getClientes = async (req, res)=> {
    try{
        const [rows] = await pool.query('SELECT * FROM clientes')
    res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
    }

    export const getCliente = async (req, res) => {
        console.log(req.params.id)
     try{
        const [rows] = await pool.query('SELECT * FROM clientes WHERE id=?', [req.params.id])
        
        if (rows.length<=0) return res.status(404).json({
            message : 'Cliente no encontrado'
        })

        res.json(rows[0])
     }
     catch (error){
        return res.status(500).json({
            message: 'Algo fue mal'
        })
     }
    }

export const crearClientes = async (req, res)=> {
    const {nombre,telefono}= req.body
   try{
    const [rows] = await pool.query('INSERT INTO Clientes (nombre,telefono) VALUES (?,?)',[nombre,telefono])
    res.send({
        id: rows.insertId,
        nombre,
        telefono,
    })
   }
   catch (error){
    return res.status(500).json({
        message: 'Algo fue mal'
    })
 }
}
export const actualizarClientes = async (req, res)=> {
    const  {id} = req.params
    const {nombre, telefono} = req.body
   try{
    const [resultado] = await pool.query('UPDATE clientes SET nombre = IFNULL(?,nombre), telefono = IFNULL(?,telefono) WHERE id = ?',[nombre,telefono,id])
    console.log(resultado)
    if (resultado.affectedRows === 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?',[id])

    res.json(rows[0])
   }
   catch (error){
    return res.status(500).json({
        message: 'Algo fue mal'
    })
 }
}

export const eliminarClientes = async (req, res)=> {
   try{
    const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [req.params.id])
    if(result.affectedRows<=0) return res.status(404).json({
        message: 'Cliente no encontrado'
    })
    res.sendStatus(204)
   }
   catch (error){
    return res.status(500).json({
        message: 'Algo fue mal'
    })
 }
} 