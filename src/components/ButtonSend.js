import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
  },
  icon: {
    marginRight: 10,
  },
}));

export default function SendButton({ disabled }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        disabled={!disabled}
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        <SendIcon className={classes.icon} />
        Send
      </Button>
    </div>
  );
}
