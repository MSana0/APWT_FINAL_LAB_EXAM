import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";

const AddProduct = ({status, addNewUser, list})=>{
    const {id:eid} = useParams();
    const [user, setUser] = useState({name: '', id:'', dept:''});
    const history = useHistory();
    //const pid=1;
    //console.log(eid);
    
    
        // const userlist1=list.find((u)=> u.id === 1);
        // console.log(userlist1);
    
    //console.log(list.find((u)=> u.id === eid));
    // const data = list.find((user)=> user.id === eid);
    //console.log(data);

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;
        setUser({...user, [attr]: val})
    };
    
    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(user);
        addNewUser(user);
        history.push('/userlist');
    }


        
        
            //setNewUser({...data});
    

    return(
        
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={onsubmit}>
                Product Name: <input type='text' name='product_name' onChange={change} /> <br/>
                Quantity: <input type='text' name='quantity' onChange={change} /><br/>
                Price: <input type='text' name='price' onChange={change} /><br/>
                <input type='submit' value='Add Product'/>
            </form>
        </>
    );
}

export default AddProduct;