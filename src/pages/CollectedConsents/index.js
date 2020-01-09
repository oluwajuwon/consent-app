import React from 'react';
import Container from '@material-ui/core/Container';
import PaginatedTable from '../../components/PaginatedTable';

import { useStyles } from './style';
const allConsents = [
  {
    name: 'name',
    email: 'jay@emial.com',
    selectedItems: [ 'one', 'two', 'three']
  },
  {
    name: 'name',
    email: 'jay@emial.com',
    selectedItems: [ 'one', 'two', 'three']
  },
  {
    name: 'name',
    email: 'jay@emial.com',
    selectedItems: [ 'one', 'two', 'three']
  },
  {
    name: 'name',
    email: 'jay@emial.com',
    selectedItems: [ 'one', 'two', 'three']
  }
]
const CollectedConsents = () => {
  const classes = useStyles();

  return (
    <div className={classes.consentsView}>
      Collected Consents
      <Container className={classes.container}>
        <PaginatedTable allConsents={allConsents} />
      </Container>
    </div>
  )
}

export default CollectedConsents;
