import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import React from 'react';


const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  form: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      isAdmin: false,
    };
  }

  handleChange(event) {
    let value;

    if (event.target.name === 'isAdmin') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    this.setState({
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    const { email, password, firstName, lastName, isAdmin } = this.state;
    console.log(email, password, firstName, lastName, isAdmin);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { isAdmin } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  autoFocus
                  id="firstName"
                  fullWidth
                  label="First Name"
                  name="firstName"
                  onChange={this.handleChange.bind(this)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={this.handleChange.bind(this)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={this.handleChange.bind(this)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="current-password"
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  onChange={this.handleChange.bind(this)}
                  required
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="street-address"
                  fullWidth
                  id="address"
                  label="Address"
                  multiline
                  name="address"
                  onChange={this.handleChange.bind(this)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="cardNb"
                  label="Credit card N°"
                  name="cardNb"
                  onChange={this.handleChange.bind(this)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="cardPin"
                  label="Credit card pin"
                  name="cardPin"
                  onChange={this.handleChange.bind(this)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch checked={isAdmin} name="isAdmin" onChange={this.handleChange.bind(this)} />
                  }
                  label="I want to have admin permissions on this site."
                />
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignupForm);