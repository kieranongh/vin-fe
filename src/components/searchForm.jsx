import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { ReactComponent as WineGlassIcon } from '../assets/wine-glass-icon.svg';
import { searchLot } from '../api/winesearch'
import { highlightQuery, formatVolume } from '../util'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3)
  },
  searchTextField: {
    backgroundColor: '#FFF',
  },
  fullWidth: {
    minWidth: 500
  },
  searchPrimaryText: {
    width: 350,
    textAlign: 'left'
  },
  searchSecondaryText: {
    textAlign: 'right'
  },
  highlight: {
    color: theme.palette.primary.main
  }
}))

const SearchForm = (props) => {
  const classes = useStyles()

  const { setSelectedLot } = props
  
  const [query, setQuery] = useState('')
  const [searchedQuery, setSearchedQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  
  const handleChange = (event) => {
    setQuery(event.target.value)
    debounceQuery(event.target.value)
  }

  const selectLot = (lot) => (event) => {
    setSelectedLot(lot)
  }

  const debounceQuery = useCallback(
    debounce((val) => {
      // Don't search API for blank, everything will come back
      if (val !== '') {
        searchLot(val).then(res => {
          setSearchResults(res)
        })
        setSearchedQuery(val)
      } else {
        setSearchResults([])
        setSearchedQuery(val)
      }
    }, 300),
    []
  )

  return (
    <form className={classes.fullWidth} autoComplete="off">
      <Grid container alignItems="center" direction="column">
        <Grid item className={classes.title}>
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
            className={`${classes.searchTextField} ${classes.fullWidth}`}
            value={query}
            onChange={handleChange}
            variant="outlined"
            placeholder="Search by lot code or description"
            inputProps={{ autoFocus: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {searchResults.map(lot => {
          const { lotCode, description, tankCode, volume } = lot
          const lotCodeHighlight = highlightQuery(searchedQuery, lotCode, classes.highlight)
          const descriptionHighlight = highlightQuery(searchedQuery, description, classes.highlight)
          const volumeFormatted = formatVolume(volume)
          return (
            <Grid item key={lotCode}>
              <ButtonBase
                focusRipple
              >
                <Card
                  variant="outlined"
                  className={classes.fullWidth}
                  onClick={selectLot(lot)}
                >
                  <CardContent>
                    <Grid container justify="space-between">
                      <Grid item className={classes.searchPrimaryText}>
                        <Typography variant="h6" className={classes.title}>
                          {lotCodeHighlight.map((chars, i) => {
                            return (
                              <React.Fragment key={i}>
                                {chars}
                              </React.Fragment>
                            )
                          })}
                        </Typography>
                        <Typography variant="body2">
                          {descriptionHighlight.map((chars, i) => {
                            return (
                              <React.Fragment key={i}>
                                {chars}
                              </React.Fragment>
                            )
                          })}
                        </Typography>
                      </Grid>
                      <Grid item className={classes.searchSecondaryText}>
                        <Typography color="textSecondary">
                          {volumeFormatted}
                        </Typography>
                        <Typography color="textSecondary">
                          {tankCode}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>
          )
        })}
        {searchResults.length === 0 && searchedQuery !== '' && (
          <p>No results found</p>
        )}
      </Grid>
    </form>
  )
}

export { SearchForm }
