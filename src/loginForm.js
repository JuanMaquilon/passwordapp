import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 324
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    marginTop: 46,
    marginBottom: 21,
    backgroundColor: '#ff9133',
    width: 324,
    height: 57,
    color: '#ffffff'
  },
  accountButton: {
    margin: theme.spacing.unit,
    backgroundColor: '#ffffff',
    width: 324,
    color: '#ff9133',
    height: 57
  }
});

class loginForm extends React.Component {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ marginTop: 200 }}>
        <form className={classes.container} noValidate autoComplete='off'>
          <div
            style={{
              fontSize: 25,
              fontWeight: 100,
              color: '#707070',
              fontFamily: 'Lato'
            }}
          >
            Password Manager
          </div>
          <TextField
            id='outlined-required'
            label='Username'
            defaultValue=''
            className={classes.textField}
            margin='normal'
            variant='outlined'
          />

          <TextField
            id='outlined-required'
            label='Password'
            defaultValue=''
            className={classes.textField}
            margin='normal'
            variant='outlined'
            type='password'
          />

          <div>
            <a href='http://google.com'>Forgot your password?</a>
          </div>

          <div>
            <Button variant='contained' className={classes.button}>
              LOG IN
            </Button>
          </div>
          <div>
            <Button variant='outlined' className={classes.accountButton}>
              CREATE AN ACCOUNT
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

loginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(loginForm);
