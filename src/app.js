import express  from 'express'
import clientesRoutes from './routes/clientes.routes.js'
import indexRoutes from './routes/index.routes.js'



const app  = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',clientesRoutes)

app.use((req,res,next)=>{
   res.status(404).json({
       message: 'Ruta no encontrada'
   })
})

export default app;