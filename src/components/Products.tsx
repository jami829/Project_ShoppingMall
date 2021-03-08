import { Container, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(7)
    }
  }),
);


function Products() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify="center" spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid key={value} item xs={6} md={4}>
            <Paper style={{ height: 200 }}>
              {value}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products;