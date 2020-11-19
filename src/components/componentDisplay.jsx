import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const tabOptions = [
  {
    label: 'Year'
  },
  {
    label: 'Variety'
  },
  {
    label: 'Region'
  },
  {
    label: 'Year & Variety'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500
  },
  searchTextField: {
    backgroundColor: '#FFF',
    minWidth: 500
  }
}))

const ComponentDisplay = (props) => {
  const classes = useStyles()
  const [tab, setTab] = React.useState(0)

  const handleChange = (_, tab) => {
    setTab(tab);
  }
  
  return (
    <>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {tabOptions.map(tab => (
          <Tab label={tab.label} key={tab.label} />
        ))}
      </Tabs>
    </>
  )
}

export { ComponentDisplay }