import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';;
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCategories } from '../../../common/networking/ecommerce-api';


const styles = theme => ({
  [theme.breakpoints.down('xl')]: {
    checkout: {
      width: '90%',
    },
    list: {
      width: '90%',
    },
  },
  [theme.breakpoints.up('xl')]: {
    checkout: {
      width: '60%',
    },
    list: {
      width: '60%',
    },
  },
  checkout: {
    alignSelf: 'center',
    marginTop: theme.spacing(4),
  },
  circularProgress: {
    left: -35,
    marginLeft: '50vw',
    marginTop: '50vh',
    position: 'absolute',
    top: -35,
  },
  empty: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
});

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, categories: [] };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    getCategories().then(categories => this.setState({loading: false, categories}));
  }

  render() {
    const { classes, history } = this.props;
    const { loading, categories } = this.state;

    return (
      <>
        {loading ? (
          <CircularProgress className={classes.circularProgress} size={70} />
        ) : (
          categories && categories.length ? (
            <>
              <Grid container direction="column">
                <Grid container justify="center">
                  <List className={classes.list} style={{borderColor: 'black', borderWidth: '1px'}}>
                    {categories.map(category => (
                      <React.Fragment key={category.id}>
                        <ListItem button component="a" href={`/category/${category.id}`}>
                          <ListItemText
                            primary={category.name.length > 27 ? category.name.slice(0, 27).concat('...') : category.name}
                            secondary={`${category.products.length} products`}
                          />
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </>
          ) : (
            <Typography className={classes.empty}>
              No categories yet. <Link href="/">Return to home.</Link>
            </Typography>
          )
        )}
      </>
    );
  }
}

CategoryList.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CategoryList));