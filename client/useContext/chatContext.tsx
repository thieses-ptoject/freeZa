import config from "../config.json";
import { createContext, useEffect, useState } from "react";
import { io, Socket } from 'socket.io-client'
import { getUserData } from "../localStorage/getuser";
export const ChatContext = createContext<any>(null)
export const ChatContextProvider = ({ children, user }: any) => {
    const [socket, setSocket] = useState<Socket | null>(null)
    const [onlineUsers, setOnlineUsers] = useState<any>(null)
    const [newMessage, setnewMessage] = useState(null)
    const [recipientId, setRecipient] = useState(null)
    const [userConnected, setUserConncted] = useState<string>('')
    const [notifications,setNotifications]=useState<any[]>([])
    const[refetchM,setRefetchM]=useState(false)
    console.log('notifications',notifications)
    console.log(user,'user')
    useEffect(() => {
        getUserData().then((result: any) => {
          setUserConncted(result.id)
    
        })
      }, []);
   
    useEffect(() => {
        const newSocket = io(`http://${config.ip}:3000`)
        setSocket(newSocket)
        return () => { newSocket.disconnect() }
    }, [user])
    //add online user 
    useEffect(() => {
        if (socket === null) return
        socket.emit("addNewUser", user)
        socket.on("getOlineUsers", (res) => { setOnlineUsers(res) })
        
        return () => { socket.off("getOlineUsers") }
    }, [socket])
    console.log(onlineUsers)
    //add message
    useEffect(() => {
        if (socket === null) return
        socket.emit('senMessage', { newMessage, recipientId,senderId:user })

    }, [newMessage])
    // recieve massage and notification 
   
    useEffect(() => {
        if (socket === null) return;
    
        const handleMessage = (res:any) => {
            setRefetchM(!refetchM);
        };
    
        // Subscribe to the 'getMessage' event
        socket.on('getMessage', handleMessage);
        socket.on('getNotification',(res)=>{
            
            setNotifications([...notifications,res])
        })
    
        // Clean up by unsubscribing from the 'getMessage' event
        return () => {
            socket.off('getMessage', handleMessage);
            socket.off('getNotification')
        };
    }, [socket, refetchM]);


    const value = {
        socket,
        setSocket,
        onlineUsers, setRecipient, setnewMessage,refetchM,setRefetchM
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}