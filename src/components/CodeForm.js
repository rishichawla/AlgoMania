import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class CodeForm extends Component {
    render() {
        return (<form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Algorithm Name"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Algorithm Description"
              id="desc"
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="genre"
              label="Genre"
              id="genre"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
           
          </form>);
    }
}
