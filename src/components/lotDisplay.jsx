import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    minWidth: 650
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  secondaryLotText: {
    padding: '0.5em'
  },
  rightTextAlign: {
    textAlign: 'right'
  },
  editButtonContainer: {
    position: 'relative'
  },
  editButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    }
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light
  },
  lotTitle: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  }

}))

const LotDisplay = (props) => {
  const classes = useStyles();
  
  const { lotCode, description, tankCode, volume, productState, ownerName, components } = props.selectedLot
  const { closeLotDisplay } = props

  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(true)
  }

  const handleEditClose = () => {
    setShowEdit(false)
  }

  return (
    <div>
      <Grid container alignItems="center" direction="column">
        <Grid item className={`${classes.buttonContainer} ${classes.fullWidth}`}>
          <IconButton onClick={closeLotDisplay}>
            <ArrowBackIcon />
          </IconButton>
          <div className={classes.editButtonContainer}>
            <Fab className={classes.editButton} onClick={handleEditClick}>
              <EditIcon />
            </Fab>
          </div>
        </Grid>
        <Grid item className={classes.fullWidth}>
          <div className={classes.lotTitle}>
            <Avatar className={classes.avatar}>W</Avatar>
            <Typography variant="h4">
              {lotCode}
            </Typography>
          </div>
          <Typography variant="h6">
            {description}
          </Typography>
          <Grid
            container
            justify="space-between"
            spacing={1}
            className={`${classes.secondaryLotText}`}
          >
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
            <Grid item className={classes.rightTextAlign}>
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
  