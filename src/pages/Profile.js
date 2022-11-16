import React, { useEffect} from 'react'
import ProfileCard from '../components/ProfileCard'
import { UserData } from "../userdetails"
import Card from '../components/Card'

const Profile = () => {
    // const [post, setPost] =useState([]);
    const username = "Samar";
    const userid = "PES1UG21CS555";
    const bio = "No bio for this id"


    useEffect(()=>{
        
    })
    // function calling_card(name, id, desc, profile_img) {
    //     return (
    //         <Card
    //             username={name}
    //             userid={id}
    //             desc={desc}
    //             userimg={profile_img}
    //         />
    //     )
    // }

    function search_post(userid, file) {
        for (var i = 0; i < file.length; i++) {
            if (file[i].userid === userid) {

                // calling_card(file[i].username, file[i].userid, file[i].userid, "../images/user_profile/panda.png")
                for (var j = file[i].posts.length - 1; j >= 0; j--) {


                    //Method 1: fail
                    // function calling_card(name, id, desc, profile_img) {
                    //     return (
                    //         <Card
                    //             username={name}
                    //             userid={id}
                    //             desc={desc}
                    //             userimg={profile_img}
                    //         />
                    //     )
                    // }
                    // calling_card(username, userid, file[i].posts[j].description, "../images/user_profile/panda.png")



                    //success: but only 1 gets printed
                    // console.log(j);
                    return (
                        <Card
                            username={file[i].username}
                            userid={file[i].userid}
                            desc={file[i].posts[j].description}
                            title={file[i].posts[j].title}
                            userimg={"../images/user_profile/panda.png"}
                        />
                    )


                    // {
                    //     (file[i].posts).map((user, username, userid) => {
                    //         const { title, description, likes, dislikes } = file[i].posts;
                    //         return (
                    //             // <div key={userid}>
                    //                 <Card
                    //                     username={username}
                    //                     userid={userid}
                    //                     title={title}
                    //                     desc={description}
                    //                     userimg={"../images/user_profile/panda.png"}
                    //                 />
                    //             // </div>
                    //         )
                    //     })
                    // }
                }
            }
        }
    }

    return (
        <>
            <ProfileCard userid={userid} username={username} bio={bio} />
            <div className='profile_tweets'>
            <div className='centered'>
            {search_post(userid, UserData)}
            </div>
            </div>
        </>
    )
}

export default Profile