import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 160
  },
  searchTextField: {
    backgroundColor: '#FFF',
    minWidth: 500
  }
}))


const SearchForm = () => {
  const classes = useStyles();
  const [query, setQuery] = React.useState('')
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <form className={classes.root} autoComplete="off">
      <Grid container alignItems="center" direction="column" spacing={3}>
        <Grid item>
          <label htmlFor="lotQuery">
            <Typography variant="h5">
              Wine search
            </Typography>
          </label>
        </Grid>
        <Grid item>
          <TextField
            id="lotQuery"
            className={classes.searchTextField}
            value={query}
            onChange={handleChange}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            />
          </Grid>
      </Grid>
    </form>
  )
}

export { SearchForm }
  