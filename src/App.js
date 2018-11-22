import React, { Component } from 'react';
import AppBar from './AppBar';
import { withStyles } from '@material-ui/core/styles';
import List from './List';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const items = [{ name: 'Black Rifle Coffee Can',
url: 'https://www.blackriflecoffee.com/collections/gear/products/brcc-coffee-can', },
{ name: 'Black Rifle Stainless Steel Mug',
url: 'https://www.blackriflecoffee.com/collections/gear/products/stainless-steel-mug', },
{ name: 'Black Rifle Coffee storage',
url: 'https://www.blackriflecoffee.com/collections/gear/products/brcc-company-air-tight-container', },
{ name: 'Black Rifle Hat',
url: 'https://www.blackriflecoffee.com/collections/apparel-1/products/thin-blue-line-hat-black-black-mesh', },
{ name: 'Black Rifle Hoodie',
url: 'https://www.blackriflecoffee.com/collections/hoodies/products/zip-up-hoodie-brcc-logo-grey', },
{ name: 'Bluetooth Scale',
url: 'https://www.amazon.com/gp/product/B01C6E2YSI/ref=ox_sc_saved_title_3?smid=A3L1QBKXQ7MHLN&psc=1', },
{ name: 'Hue Bulb',
url: 'https://www.amazon.com/gp/product/B01M9AU8MB/ref=ox_sc_saved_title_7?smid=ATVPDKIKX0DER&psc=1', },
{ name: 'Hue Bulb 4-Pack',
url: 'https://www.amazon.com/gp/product/B073SSK6P8/ref=ox_sc_saved_title_4?smid=ATVPDKIKX0DER&psc=1', },
{ name: 'Red Dead Redemption Code',
url: 'https://www.amazon.com/dp/B07G9WVK6K/?coliid=I2BCGKUHTMF2D5&colid=277BQOGZC2VXD&psc=0&ref_=lv_ov_lig_dp_it', },
{ name: 'Glass V60 Dripper',
url: 'https://www.amazon.com/dp/B002VUSWGQ/?coliid=I9OI1QBOL7UP3&colid=277BQOGZC2VXD&psc=0&ref_=lv_ov_lig_dp_it', },
{ name: 'Pokemon Go Switch',
url: 'https://www.amazon.com/dp/B01MT8AIBE/?coliid=I1NHN39DTWOQOZ&colid=277BQOGZC2VXD&psc=0&ref_=lv_ov_lig_dp_it', },
{ name: 'Super Smash Bros Switch',
url: 'https://www.amazon.com/dp/B01N5OKGLH/?coliid=IUVME0NRZJBGO&colid=277BQOGZC2VXD&psc=0&ref_=lv_ov_lig_dp_it', },
]

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
    paddingTop: theme.spacing.unit * 2
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.list}
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <List items={items} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
