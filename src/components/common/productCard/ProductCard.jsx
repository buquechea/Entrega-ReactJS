import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"

const ProductCard = ( {title, price, image, author, genre, stock, id} ) => {
    console.log("titulo en ProductCard:", title);  // Verifica si 'titulo' llega correctamente
    console.log("precio en ProductCard:", price);
    return (
    <div>
        <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {author} &nbsp; &nbsp; &nbsp; {genre} &nbsp; &nbsp; &nbsp; {stock} disponibles
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`}>
        <Button size="small">ver detalles</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    
    
    );
  }
  
  export default ProductCard;
  