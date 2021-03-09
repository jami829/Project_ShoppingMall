import { Container, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import cuid from 'cuid';
import React from 'react';
import { cartItemVar } from '../cache';

import img from '../img/1.jpeg';
import ProductsThumbnail from './ProductsThumbnail';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(7)
    }
  }),
);

const products = [...Array(10)].map(() => ({
  name: "인테리어",
  price: "1000",
  imgUrl: img
}))

function Products() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify="center" spacing={2}>
        {products.map((item) => (
          <Grid item xs={6} md={4}>
            <ProductsThumbnail {...item} onClick={() => {
              // Reactive Variables를 인자 없이 그냥 호출하게 되면 현재 Reactive Variables 이 가지고 있는 상태를 반환하게 됨
              const allCartItems = cartItemVar();
              //전달한 인자를 Reactive Variables의 새로운 값으로 인식해서 대체하게 된다.
              cartItemVar([...allCartItems, {
                id: cuid(),
                product: { ...item, id: cuid() },
                amount: 1
              }]);
            }} />;

          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products;