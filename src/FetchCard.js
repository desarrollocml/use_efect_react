import React,{useState,useEffect} from 'react'
import getUser from './helpers/getUser'
const initialUser = {
    name: "Luis",
    email: "correo@correo.com"
}

const initialPosts = [
    {id:1, title:"Post 1"},
    {id:2, title:"Post 2"},
]

export default function FetchCard() {
    const [user, setUser] = useState(initialUser);
    const [posts, setPosts]= useState(initialPosts);

    const updateUser = () => {
        getUser()
            .then((newUser)=>{
                setUser(newUser);
            })
    }

    useEffect(() => {
        updateUser();
    }, []);

    return (
        <div>
            <button onClick={updateUser}>
                Otro Usuario
            </button>
            <h1>{user.name} </h1>
            <h1>{user.email} </h1>
        </div>
    )
}
