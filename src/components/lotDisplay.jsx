import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    minWidth: 500
  }
}))

const LotDisplay = (props) => {
  const classes = useStyles();
  
  const { lotCode, description, tankCode, volume, productState, ownerName, components } = props.selectedLot
  const { closeLotDisplay } = props

  return (
    <div>
      <Grid container alignItems="center" direction="column" spacing={3}>
        <Grid item>
          <IconButton onClick={closeLotDisplay}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item>
          {/* Avatar */}
          <Typography variant="h4" className={classes.fullWidth}>
            {lotCode}
          </Typography>
          <Typography variant="h6" className={classes.fullWidth}>
            {description}
          </Typography>
          <Grid container justify="space-between" spacing={1} className={classes.fullWidth}>
            <Grid item>
              <Typography>
                Volume
              </Typography>
              <Typography>
                Tank code
              </Typography>
              <Typography>
                Product state
              </Typography>
              <Typography>
                Owner
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {volume}
              </Typography>
              <Typography>
                {tankCode}
              </Typography>
              <Typography>
                {productState}
              </Typography>
              <Typography>
                {ownerName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export { LotDisplay }
  