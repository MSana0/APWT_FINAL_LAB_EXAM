import Product from './Product';
import { useFetch } from './useFetch';
// var blabla= useFetch('http://127.0.0.1:8000/api/')
// console.log(blabla)

const ProductList = ({list, deleteCallback})=>{
  
    return (
        <div>
            <h1>All Product List</h1>
            {
                list.map((u)=>{
                   return  <Product key={u.id} {...u} callback={deleteCallback}/>
                })
            }
        </div>
    );
}

export default ProductList;