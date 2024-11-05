import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../../fireBaseConfig'; 
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, "products"); 
                const productSnapshot = await getDocs(productsCollection);
                const productList = productSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log("Productos obtenidos: ", productList);
                setItems(productList);
            } catch (error) {
                console.log("Ocurrió un error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ItemList items={items} />
    );
};

export default ItemListContainer;