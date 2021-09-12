import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
// const products = [
//   {
//     id: 1,
//     name: "shoes",
//     description: "Running shoes",
//     price: "$5",
//     image:
//       "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/1144163-987539-The-Top-7-Altra-Running-Shoes-of-2021-1296x728-headerc0dcdf-1296x727.jpg?w=1155&h=1528",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "apple macbook",
//     price: "$1000",
//     image: "https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA.jpg",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
