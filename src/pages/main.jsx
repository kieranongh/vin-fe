import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { SearchForm } from '../components/searchForm'

const useStyles = makeStyles((theme) => ({
  
}))

const Main = () => {
  const classes = useStyles()
  
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <SearchForm />
        </Grid>
      </Grid>
    </div>
  )
}

export { Main }