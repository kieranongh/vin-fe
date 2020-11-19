import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { getBreakdown } from '../api/winesearch'

const tabOptions = [
  {
    label: 'Year',
    value: 'year'
  },
  {
    label: 'Variety',
    value: 'variety'
  },
  {
    label: 'Region',
    value: 'region'
  },
  {
    label: 'Year & Variety',
    value: 'year-variety'
  }
]

const useStyles = makeStyles((theme) => ({
  rightTextAlign: {
    textAlign: 'right'
  },
  listContainer: {
    marginBottom: '2em'
  }
}))

const RowComponent = ({row, fields, classes, header}) => {
  return (
    <Grid item>
      <Card
        variant="outlined"
      >
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant={header ? 'h6' : 'body1'}>
                {row[fields[0]]}
              </Typography>
            </Grid>
            <Grid item className={classes.rightTextAlign}>
              <Typography variant={header ? 'h6' : 'body1'}>
                {`${row[fields[1]]}${header ? '' : '%'}`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

const ComponentDisplay = (props) => {
  const classes = useStyles()

  const { lotCode } = props

  const [selectedTab, setSelectedTab] = useState('year')
  const [breakdown, setBreakdown] = useState([])
  const [columns, setColumns] = useState([
    { id: 'year', field: 'year', headerName: 'Year' },
    { id: 'percentage', field: 'percentage', headerName: 'Percentage' },
  ])

  useEffect(() => {
    getBreakdown(lotCode, selectedTab).then(res => {
      if (res && res.breakdown) {
        const rows = res.breakdown.map((item) => {
          return {
            id: item.key,
            [selectedTab]: item.key,
            percentage: item.percentage
          }
        })
        const tab = tabOptions.find(opt => opt.value === selectedTab)
        setBreakdown(rows)
        setColumns([
          { id: selectedTab, field: selectedTab, headerName: tab.label },
          { id: 'percentage', field: 'percentage', headerName: 'Percentage' }
        ])
      }
    })
  }, [selectedTab, lotCode])


  const handleChange = (_, tabValue) => {
    setSelectedTab(tabValue)
  }
  
  return (
    <>
      <Tabs
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {tabOptions.map(tab => (
          <Tab label={tab.label} value={tab.value} key={tab.value} />
        ))}
      </Tabs>
      <Grid container alignItems="stretch" direction="column" className={classes.listContainer}>
        <RowComponent
          row={columns.map(c => c.headerName)}
          fields={[0, 1]}
          classes={classes}
          header
        />
        {breakdown.map(item => (
          <RowComponent
            key={item.id} 
            row={item} 
            fields={columns.map(c => c.field)} 
            classes={classes} 
          />
        ))}
      </Grid>
    </>
  )
}

export { ComponentDisplay }