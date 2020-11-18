import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { SearchForm } from '../components/searchForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  }
}))

const Main = () => {
  const classes = useStyles()
  
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item>
                <SearchForm />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export { Main }