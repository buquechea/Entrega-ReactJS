const ProductCard = ( {precio} ) => {
    return (
    <div>
        <div className="container">
            <img src="https://http2.mlstatic.com/D_NQ_NP_614549-MLU74239944481_012024-O.webp" alt="" />
            <h5>precio: {precio}</h5>
        </div>
        <div className="container">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1649928964-51joU69wSPS._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" />
            <h5>precio: {precio}</h5>
        </div>
        <div className="container">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1649929060-51dL0EfkinL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="" />
            <h5>precio: {precio}</h5>
        </div>
    </div>
    );
  }
  
  export default ProductCard;
  