const app = require("express");
const server   = require ("http").createServer(app)


const io = require("socket.io")(server , {
    cors : {
        origin : "*",
    }
})



io.on("connection" , (socket) => {
console.log("this is socket" , socket)



socket.on("chat" , (payload) => {
    console.log('this is payload' , payload)
    io.emit("chat" , payload)
})

})
    



const port = process.env.PORT ||   5000

server.listen(port , () => {
    console.log("server running on 5000")
})