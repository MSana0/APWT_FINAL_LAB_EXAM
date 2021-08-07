import { Link } from "react-router-dom"


const Navbar = ()=>{

    return (
        <div>
            <Link to="/register">Register New User</Link> | 
            <Link to="/userlist">User List</Link> |
            <Link to="/AddProduct">Add Product</Link> |
            <Link to="/ProductList">Product list</Link>
        </div>
    );
}

export default Navbar;