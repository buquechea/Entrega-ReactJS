import ProductCard from "../../common/productCard/ProductCard"

const ItemList = ({items}) => {
    console.log("items en ItemList:", items);
    return (
         <div 
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px"
        }}
        >
        {items.map((item) => (
            <ProductCard key={item.id} title={item.title} price={item.price} image={item.imageUrl} author={item.author} genre={item.genre} stock={item.stock} id={item.id} />
        ))}
            </div>
        );
}



export default ItemList

