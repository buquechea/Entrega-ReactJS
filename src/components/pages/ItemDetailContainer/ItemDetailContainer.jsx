import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from "../../../Item";

const ItemDetailContainer = () => {
    const { id } = useParams();  // Obtiene el 'id' de la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simula una "solicitud" para obtener el producto por su 'id'
        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                const foundProduct = products.find((prod) => prod.id === id);
                resolve(foundProduct);
            }, 1000);  // Simula una espera de 1 segundo
        });

        getProduct.then((prod) => {
            setProduct(prod);  // Actualiza el estado con el producto encontrado
        });
    }, [id]);  // Se ejecuta cada vez que cambie el 'id'

    if (!product) {
        return <p>Cargando producto...</p>;  // Muestra un mensaje mientras se cargan los datos
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>Precio: {product.price} €</h4>
        </div>
    );
};

export default ItemDetailContainer;