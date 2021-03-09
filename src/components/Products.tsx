import { Container, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';

import img from '../img/1.jpeg';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(7)
    }
  }),
);

const products = [...Array(10)].map(() => ({
  name: "인테리어",
  price: 1000,
  imgUrl: img
}))

function Products() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify="center" spacing={2}>
        {products.map(({ name, price, imgUrl }) => (
          <Grid item xs={6} md={4}>
            <Paper>
              <img
                style={{ width: "100%" }}
                src={imgUrl}
                alt="product thumbnail"
              />
              {name}
              {price}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products;