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
    const [rate,setRate]=useState(0)
    console.log(notifications1,'notification')
    //add notification
    useEffect(() => {
        if (socket === null) return
        socket.emit('sendNotification', {recipient1Id,senderId:user })
         axios.post(`http://${config.ip}:3001/notificationsRate/add`,{reciever:recipient1Id,senderId:user,rate}).then((res)=>{
                  console.log('done save notification')
              }).catch((err)=>{console.log(err,'dddddddd')})

    }, [newnotification])
    // recieve  notification 
   
    useEffect(() => {
        if (socket === null) return;
    
        const handleMessage = (res:any) => {
            setRefetchM1(!refetchM1);
        };
    
        // Subscribe to the 'getMessage' event
    
        socket.on('getNotifications',(res:any)=>{
              setNotifications1([...notifications1,res])
              setFetchNotificationsnew(!fetchNotificationsnew)
             
        })
        
      
        // Clean up by unsubscribing from the 'getMessage' event
        return () => {
           
            socket.off('getNotification')
        };
    }, [socket,refetchM1]);


    const value = {
      setRecipient1, setnewnotification,refetchM1,setRefetchM1,newnotification,rate,setRate
    };

    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}