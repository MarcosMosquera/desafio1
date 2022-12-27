const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));




const httpServer = app.listen(8080, () => console.log('Listening...'))
const socketServer = new Server(httpServer)



app.use(express.static(__dirname + '/public'))

socketServer.on('connection', socket => { // Handshake
    console.log('New client')

    socket.on('message', data => {
        console.log('Server:', data)

        socket.emit('msg_individual', 'Este mensaje, solo lo recibe el socket')
        socket.broadcast.emit('msg_resto', 'Este mensaje lo reciben todos menos el socket actual')
        socketServer.emit('msg_all', 'Este mensaje se lo envia a todos')
    })
})



const viewRouter = express.Router();

viewRouter.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts');
});

app.use('/views', viewRouter);




app.get('/', (req, res) => {
    const products = ['Producto 1', 'Producto 2', 'Producto 3'];
    res.render('home', { products });
  });


  const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('Un nuevo cliente se ha conectado');
  
    socket.on('enviar-mensaje', (mensaje) => {
      console.log(`Mensaje recibido: ${mensaje}`);
  
      socket.emit('mensaje-recibido', mensaje);
  
      io.emit('mensaje-enviado', mensaje);
    });
});