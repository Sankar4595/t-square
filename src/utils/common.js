import axios from "axios";
import { API_URL } from "../App";

export const getUserDetails = async () => {
    try {
        const res = await axios.get(`${API_URL}users/getUsersDetails`, { withCredentials: true });
        console.log("getUserDetails response: ", res);
        return res?.data?.user ?? null;
    } catch (error) {
        console.error("Error fetching user details:", error);
        return null;
    }
};
