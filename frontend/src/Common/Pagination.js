import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme) => ({
  root: {

    position: 'fixed',
    marginTop: '0',
    left: '0',
    zIndex: '999',
    width: '94.6%',
    margin: 'auto 2.25%',
    top: 'unset',
    bottom: '0',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}));

export default function PagePagination(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination page={props.page} onChange={props.pageChange} count={props.noOfPages} size="large" />

    </div>
  );
}