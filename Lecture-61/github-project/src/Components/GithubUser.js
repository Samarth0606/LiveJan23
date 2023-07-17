import React, { useEffect, useState } from 'react';
import style from "./Github.module.css";

const GithubUser = (props) => {


    let [user, setUser] = useState({
        followers:0,
        imgUrl:"",
        following:0
    });

    useEffect(()=>{
        async function getUser(username){
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            // console.log(data);
            const { avatar_url, following, followers} = data;
            setUser(()=>{
                return{
                    imgUrl:avatar_url,
                    following,
                    followers
                }
            })

        }
        getUser(props.username);
    },[])

    console.log("hello")

  return (
    <div>
        <figure className={style.user}>
            <img src={user.imgUrl} alt="profile pic" />
            <figcaption>
                <p>UserName:  {props.username}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </figcaption>
        </figure>
    </div>
  )
}

export default GithubUser
