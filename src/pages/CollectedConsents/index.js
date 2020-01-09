import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container';
import PaginatedTable from '../../components/PaginatedTable';

import { getConsents } from '../../store/modules/consent';

import { useStyles } from './style';

const CollectedConsents = props => {
  const { consents, getConsents } = props;
  const classes = useStyles();

  console.log(consents, 'changed');
  useEffect(() => {
    getConsents();
  },[])

  return (
    <div className={classes.consentsView}>
      Collected Consents
      <Container className={classes.container}>
        <PaginatedTable allConsents={consents} />
      </Container>
    </div>
  )
}

export const mapStateToProps = state => ({
  consents: state.consent.data
});

export const mapDispatchToProps = dispatch => ({
  getConsents: userFeedback => dispatch(getConsents(userFeedback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectedConsents);
