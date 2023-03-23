import { ButtonFollow } from "./followButtonStyle";
import axios from "axios";
import { useEffect, useState } from "react";

export function Follow({id, token}){
    const [isFollowing, setIsFollowing] = useState(false)
    const [following, setFollowing] = useState("Follow")

    function follow(){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const URL = `${process.env.REACT_APP_API_URL}/user/${id}`;
          const promise = axios.post(URL, {}, config);
          promise.then((res) => {
            alert("Following!")
            setFollowing("Unfollow")
            console.log(res.data)
          });
          promise.catch((error) => {
            alert("Error!")
            console.log(error);
          });    
    }


    function unfollow(){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const URL = `${process.env.REACT_APP_API_URL}/user/${id}`;
          const promise = axios.delete(URL, {}, config);
          promise.then((res) => {
            alert("Following!")
            setFollowing("Unfollow")
            console.log(res.data)
          });
          promise.catch((error) => {
            alert("Error!")
            console.log(error);
          });    
    }

    function getFollow(){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const URL = `${process.env.REACT_APP_API_URL}/follow/${id}`;
          const promise = axios.get(URL, config);
          promise.then((res) => {
            console.log(res.data)
          });
          promise.catch((error) => {
            alert("Error!")
            console.log(error);
          });    

    }

    useEffect(() => {
        getFollow()
    }, [id])

    return (
        <>
        <ButtonFollow onClick={follow}>{following}</ButtonFollow>
        </>
    )
}