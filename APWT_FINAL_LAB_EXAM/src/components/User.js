import './user.css';
import {Link} from "react-router-dom";


const User = ({id, name, phone, username, callback})=>{
    return (
        <div className= 'std'>
            <h3>User Name: {name}</h3>
            <h3>Contact: {phone}</h3>
            <p>Username: {username} </p> 
            
            <button onClick={()=>callback(name)}>Delete</button>
            <Link to={`/edit/${id}`}> EDIT</Link>
        </div>
    );
}

export default User;