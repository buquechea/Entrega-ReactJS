import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../../fireBaseConfig'; 
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
    const { id } = useParams();  
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);  

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(db, "products", id); 
                const productSnap = await getDoc(productRef);

                if (productSnap.exists()) {
                    setProduct({ id: productSnap.id, ...productSnap.data() });
                } else {
                    console.log("No existe un producto con este ID");
                }
            } catch (error) {
                console.log("Error al obtener el producto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Cargando producto...</p>;  
    }

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const onAdd = () => {
        let productoParaElCarrito = { ...product, quantity };  
        addToCart(productoParaElCarrito);
    };

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>Precio: {product.price} €</h4>
            
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <button onClick={decrement}>-</button>
                <span style={{ margin: '0 10px' }}>{quantity}</span>
                <button onClick={increment}>+</button>
            </div>

            <button onClick={onAdd} style={{ marginTop: '10px' }}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetailContainer;


