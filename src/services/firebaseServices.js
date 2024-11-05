import { db } from '../fireBaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const addProduct = async (product) => {
    try {
        await addDoc(collection(db, 'products'), product);
        console.log("Producto añadido con éxito!");
    } catch (error) {
        console.error("Error al añadir producto: ", error);
    }
};

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};
