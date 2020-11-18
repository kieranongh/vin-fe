import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
}))


const SearchForm = () => {
  const classes = useStyles();
  const [query, setQuery] = React.useState('')
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <form className={classes.root} autoComplete="off">
      <TextField
        value={query}
        onChange={handleChange}
        variant="outlined"
      />
    </form>
  )
}

export { SearchForm }
  