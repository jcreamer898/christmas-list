import React, { Component } from 'react';
import AppBar from './AppBar';
import { withStyles } from '@material-ui/core/styles';
import List from './List';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const items = require('./Items.json');

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
