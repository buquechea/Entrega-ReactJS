import ProductCard from "../../common/productCard/ProductCard";
import { useState, useEffect } from 'react';
import { products } from "../../../Item"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((res) => {
            console.log("Productos obtenidos en ItemListContainer:", products);
            setTimeout(() =>{
                res (products)
            }, 2000); // Simulación de carga
        });

        getProducts.then((response) => {
            console.log("Productos obtenidos: ", response);
            setItems(response); // Actualiza el estado con los productos
        }).catch((error) => {
            console.log("Ocurrió un error al obtener los productos", error);
        });
    }, []);

    return (
        <ItemList items={items} />
    )
};


export default ItemListContainer;