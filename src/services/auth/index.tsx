import { toast } from "react-toastify";
import axiosInstance from "../../configs/axios";

type LoginResponse = {
  userId: string,
  token: string
}

type LoginPayload = {
  username: string,
  password: string
}

const login = async (payload : LoginPayload) : Promise<boolean> => {
  try {
    const response = await axiosInstance.post("/auth/login",payload)
    const { token } = response.data as LoginResponse;
    localStorage.setItem('token', token);
    toast.success("Login successful")
    return true;
  } 
  catch (error) {
    toast.error("Login failed")
    console.error(error);
    return false;
  }
}

export {login}