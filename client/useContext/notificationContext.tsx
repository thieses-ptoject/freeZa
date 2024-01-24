import config from "../config.json";
import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from 'socket.io-client'
import { getUserData } from "../localStorage/getuser";
import axios from "axios";
import { ChatContext } from "./chatContext";
export const NotificationContext = createContext<any>(null)
export const NotificationContextProvider = ({ children, user }: any) => {
    const { onlineUsers, socket } = useContext(ChatContext)
    const [newnotification, setnewnotification] = useState(false)
    const [recipient1Id, setRecipient1] = useState(null)
    const [notifications1,setNotifications1]=useState<any[]>([])
    const [fetchNotificationsnew,setFetchNotificationsnew]=useState(false)
    const[refetchM1,setRefetchM1]=useState(false)
    
    //add notification
    useEffect(() => {
        if (socket === null) return
        socket.emit('sendNotification', {recipient1Id,senderId:user })

    }, [newnotification])
    // recieve massage and notification 
   
    useEffect(() => {
        if (socket === null) return;
    
        const handleMessage = (res:any) => {
            setRefetchM1(!refetchM1);
        };
    
        // Subscribe to the 'getMessage' event
    
        socket.on('getNotifications',(res:any)=>{
              setNotifications1([...notifications1,res])
              
              axios.post(`http://${config.ip}:3001/notifications/add`,res).then((res)=>{
                  console.log('done save notification')
              }).catch((err)=>{console.log(err,'dddddddd')})
        })
        
      
        // Clean up by unsubscribing from the 'getMessage' event
        return () => {
           
            socket.off('getNotification')
        };
    }, [socket,refetchM1]);


    const value = {
      setRecipient1, setnewnotification,refetchM1,setRefetchM1,newnotification
    };

    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}