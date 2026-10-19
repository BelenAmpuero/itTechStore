import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../firebase/db";
import { useParams } from "react-router";
import Skeleton from "./Skeleton";
import banner from "../assets/baner1000.png";
import AboutUs from "./AboutUs";


function ItemListContainer (){ 

    const [items, setItems] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    
useEffect(()=> {
    setLoading(true);

     const fetchData = async () => {
    try {
      const prods = id
        ? await getProductsByCategory(id)
        : await getProducts();

      setItems(prods);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]);

return (
  <>

    <section id="productos" className="scroll-mt-20">
      {loading ? <Skeleton /> : <ItemList items={items} />}
    </section>

    <AboutUs />
  </>

)
}

export default ItemListContainer;