import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { SearchForm } from '../components/searchForm'
import { LotDisplay } from '../components/lotDisplay'

const useStyles = makeStyles((theme) => ({
  searchFormContainer: {
    marginTop: 160
  }
}))

const Main = () => {
  const classes = useStyles()
  const [selectedLot, setSelectedLot] = useState(null)

  const closeLotDisplay = () => setSelectedLot(null)
  const openLotDisplay = (lot) => {
    setSelectedLot(lot)
  }
  
  return (  
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid className={classes.searchFormContainer} item>
          {!selectedLot && (
            <SearchForm setSelectedLot={openLotDisplay}/>
          )}
          {selectedLot && (
            <LotDisplay selectedLot={selectedLot} closeLotDisplay={closeLotDisplay}/>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export { Main }