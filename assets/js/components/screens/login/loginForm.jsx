import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  form: {
    marginTop: theme.spacing(1),
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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    console.log(email, password);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              autoComplete="email"
              autoFocus
              fullWidth
              id="email"
              label="Email Address"
              margin="normal"
              name="email"
              onChange={this.handleChange.bind(this)}
              required
              variant="outlined"
            />
            <TextField
              autoComplete="current-password"
              id="password"
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={this.handleChange.bind(this)}
              required
              type="password"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="Remember me"
            />
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginForm);