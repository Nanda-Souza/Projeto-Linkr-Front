import { ButtonFollow, ButtonUnfollow } from "./followButtonStyle";
import axios from "axios";
import { useEffect, useState } from "react";

export function Follow({id, token}){
    const [isFollowing, setIsFollowing] = useState(false)
    const [disable, setDisable] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function followUser(){    
      setIsLoading(true)
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
            setIsLoading(false)
          });
          promise.catch((error) => {
            alert("Something went wrong. Please, try again.")
            console.log(error);
            setIsLoading(false)
          });    
    }


    function unfollowUser(){
      setIsLoading(true)
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
            setIsLoading(false)
          });
          promise.catch((error) => {
            alert("Something went wrong. Please, try again.")
            console.log(error);
            setIsLoading(false)
          });    
    }

    function getFollow(){
      setIsLoading(true)
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const URL = `${process.env.REACT_APP_API_URL}/follow/${id}`;
          const promise = axios.get(URL, config);
          promise.then((res) => {     
            setIsLoading(false)   
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
        {isLoading ? (
        <p>Loading...</p>
      ) : isFollowing ? (
        <ButtonUnfollow data-test="follow-btn" onClick={unfollowUser}>
          Unfollow
        </ButtonUnfollow>
      ) : (
        <ButtonFollow data-test="follow-btn" onClick={followUser}>
          Follow
        </ButtonFollow>
      )} 
       
        </>
    )
}