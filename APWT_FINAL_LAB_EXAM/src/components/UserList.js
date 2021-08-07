import User from './User';
import { useFetch } from './useFetch';
// var blabla= useFetch('http://127.0.0.1:8000/api/')
// console.log(blabla)

const UserList = ({list, deleteCallback})=>{
  
    return (
        <div>
            <h1>All User List</h1>
            {
                list.map((u)=>{
                   return  <User key={u.id} {...u} callback={deleteCallback}/>
                })
            }
        </div>
    );
}

export default UserList;