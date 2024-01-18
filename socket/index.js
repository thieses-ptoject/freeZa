const { Server } = require("socket.io");

const http =require( "http");


const server = http.createServer();
let onlineUser=[]

const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id)
  //add connection 
  socket.on("addNewUser",(userId)=>{
 if(!onlineUser.some((user)=>{user.userId===userId})) {
 onlineUser.push({
    userId,
    socketId:socket.id
 })}
 console.log(onlineUser)
 io.emit('getOlineUsers',onlineUser);
  })
  //add message
  socket.on('senMessage',(message)=>{
   const user= onlineUser.find((user)=>user.userId===message.recipientId)
   if(user){
    io.to(user.socketId).emit('getMessage',message)
    
    io.to(user.socketId).emit('getNotification',
    {
      senderId:message.senderId,
      isRead:false,
      date:new Date(),
      reciever:message.recipientId
    })
   }
  })
socket.on("disconnect",()=>{
    onlineUser=onlineUser.filter((user=>user.socketId!==socket.id))
    io.emit('getOlineUsers',onlineUser);

})
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});