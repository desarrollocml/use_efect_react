import React,{useState,useEffect,useCallback} from 'react'
import getUser from './helpers/getUser'
import getPost from './helpers/getPost'
/* const initialUser = {
    name: "Luis",
    email: "correo@correo.com"
}

const initialPosts = [
    {id:1, title:"Post 1"},
    {id:2, title:"Post 2"},
] */

export default function FetchCard() {
    const [user, setUser] = useState({});
    const [posts, setPosts]= useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser)=>{
                setUser(newUser);
            })
    }

    useEffect(() => {
        updateUser();
    }, []);

    const updatePost = useCallback(() => {
        getPost(user.id)
            .then((newPost)=>{
                setPosts(newPost);
            })
    },[user.id]);

    useEffect(() => {
        updatePost();
    }, [user,updatePost]);


    
    return (
        <div>
            <button onClick={updateUser}>
                Otro Usuario
            </button>
            <h1>{user.name} </h1>
            <h1>{user.email} </h1>
            <br/>
            <h2>Post -user:{user.id}</h2>
            <ul>
                {
                    posts.map(post =>(
                        <li key={post.id}> {post.body}</li>
                    ))
                }
            </ul>
        </div>
    )
}
