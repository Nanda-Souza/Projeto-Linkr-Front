import { ButtonFollow } from "./followButtonStyle";
import axios from "axios";
import { useEffect, useState } from "react";

export function Follow({id, token}){
    const [isFollowing, setIsFollowing] = useState(false)
    const [follow, setFollow] = useState(undefined)
    const [disable, setDisable] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

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
            setFollow("Unfollow")
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
            setFollow("Follow")
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
          setIsLoading(false);
          promise.then((res) => {        
            if(res.data.length === 0){
                setFollow("Follow")
                setIsFollowing(false)
            } else {
                setFollow("Unfollow")
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

    if (isLoading || follow === undefined) {
        return <div>Loading...</div>;
      }

    return (
        <>
        <ButtonFollow data-test="follow-btn" disable={disable} onClick={isFollowing ? unfollowUser : followUser} follow={follow}>{follow}</ButtonFollow>
        </>
    )
}