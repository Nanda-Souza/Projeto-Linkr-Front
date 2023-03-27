import { ButtonFollow, ButtonUnfollow } from "./followButtonStyle";
import axios from "axios";
import { useEffect, useState } from "react";

export function Follow({id, token}){
    const [isFollowing, setIsFollowing] = useState(false)
    const [disable, setDisable] = useState(false)

    function followUser(){    

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const URL = `${process.env.REACT_APP_API_URL}/user/${id}`;
          const promise = axios.post(URL, {}, config);

          setDisable(true)
          promise.then((res) => {
            setDisable(false)
            setIsFollowing(true)
          });
          promise.catch((error) => {
            alert("Something went wrong. Please, try again.")
            console.log(error);
          });    
    }


    function unfollowUser(){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const URL = `${process.env.REACT_APP_API_URL}/user/${id}`;
          const promise = axios.delete(URL, config);
          setDisable(true)
          promise.then((res) => {
            setDisable(false)
            setIsFollowing(false)
          });
          promise.catch((error) => {
            alert("Something went wrong. Please, try again.")
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
            if(res.data.length === 0){    
                setIsFollowing(false)
            } else {
                setIsFollowing(true)
            }
          });
          promise.catch((error) => {
            alert("Something went wrong. Please, try again.")
            console.log(error);
          });    

    }

    useEffect(() => {
        getFollow()
    }, [id])


    return (
        <> 
        { isFollowing ?  <ButtonUnfollow data-test="follow-btn" disable={disable} onClick={unfollowUser}>Unfollow</ButtonUnfollow>
        : <ButtonFollow data-test="follow-btn" disable={disable} onClick={followUser}>Follow</ButtonFollow> }     
       
        </>
    )
}