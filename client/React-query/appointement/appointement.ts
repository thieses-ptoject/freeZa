import { useMutation, useQuery } from "@tanstack/react-query";

import axios from "axios";
import config from "../../config.json";

export const addappointement = () => {
  const query = useMutation({
    mutationKey: ["addapp"],
    mutationFn: async (object: {
      time: string;
      giverId: string;
      reciverId: string;
      ItemId: number;
      location: string;
    }) => {
      await axios.post(`http://${config.ip}:3001/appointment/`, {
        time: object.time,
        giverId: object.giverId,
        reciverId: object.reciverId,
        ItemId: object.ItemId,
        location: object.location,
      });
    },

    onSuccess: (data) => {
      console.log("done");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return query;
};
export const getApp = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const result = await axios.get(`http://${config.ip}:3001/post/getall`);
      return result.data;
    },
  });
  return query;
};

// wided -myAppointements

export const getGivesDone = (giverId: string) => {
  const query = useQuery<Appointments[]>({
    queryKey: ["Appointments", 1],
    queryFn: async () => {
      const response = await axios.get(
        `http://${config.ip}:3001/appointment/appgivdone/${giverId}`
      );
      return response.data;
    },
  });
  return query;
};

export const getReceivedDone = (reciverId: string) => {
  const query = useQuery<Appointments[]>({
    queryKey: ["Appointments", 2],
    queryFn: async () => {
      const response = await axios.get(
        `http://${config.ip}:3001/appointment/apprecdone/${reciverId}`
      );
      return response.data;
    },
  });
  return query;
};

export const getGivesNotDone = (giverId: string) => {
  const query = useQuery<Appointments[]>({
    queryKey: ["Appointments", 3],
    queryFn: async () => {
      const response = await axios.get(
        `http://${config.ip}:3001/appointment/appgivnotdone/${giverId}`
      );
      return response.data;
    },
  });
  return query;
};

export const getReceiveNotDone = (reciverId: string) => {
  const query = useQuery<Appointments[]>({
    queryKey: ["Appointments", 4],
    queryFn: async () => {
      const response = await axios.get(
        `http://${config.ip}:3001/appointment/apprecnotdone/${reciverId}`
      );
      return response.data;
    },
  });
  return query;
};

export const DeleteAppointment = () => {
  const query = useMutation({
    mutationKey: ["Appointments"],
    mutationFn: async (object: { id: number; ItemId: number }) => {
      const res: any = await axios.delete(
        `http://${config.ip}:3001/appointment/${object.id}/${object.ItemId}`
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};

export const appointmentDone = () => {
  const query = useMutation({
    mutationKey: ["Appointments"],
    mutationFn: async (object: { ItemId: number, appointmentId: number , reciverId: string,giverId: string}) => {
      const res: any = await axios.put(
        `http://${config.ip}:3001/appointment`,object)
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return query;
};
