import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { ReactComponent as WineGlassIcon } from '../assets/wine-glass-icon.svg';
import { searchLot } from '../api/winesearch'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500
  },
  searchTextField: {
    backgroundColor: '#FFF',
    minWidth: 500
  },
}))


const SearchForm = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  
  const handleChange = (event) => {
    setQuery(event.target.value)
    debounceQuery(event.target.value)
  }

  const debounceQuery = useCallback(
    debounce((val) => {
      searchLot(val).then(res => {
        setSearchResults(res)
      })
    }, 300),
    []
  )

  return (
    <form className={classes.root} autoComplete="off">
      <Grid container alignItems="center" direction="column" spacing={3}>
        <Grid item>
          <label htmlFor="lotQuery">
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="h5">
                  Wine search
                </Typography>
              </Grid>
              <Grid item>
                <SvgIcon component={WineGlassIcon} viewBox="0 0 24 28" />
              </Grid>
            </Grid>
          </label>
        </Grid>
        <Grid item>
          <TextField
            id="lotQuery"
            className={classes.searchTextField}
            value={query}
            onChange={handleChange}
            variant="outlined"
            placeholder="Search by lot code or description"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {searchResults.map(searchResult => {
          const { lotCode, description, tankCode, volume } = searchResult
          return (
            <Grid item key={lotCode}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Typography variant="h6" className={classes.title}>
                        {lotCode}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {description}
                      </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: 'right' }}>
                      <Typography color="textSecondary">
                        {volume}
                      </Typography>
                      <Typography color="textSecondary" component="p">
                        {tankCode}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </form>
  )
}

export { SearchForm }
  