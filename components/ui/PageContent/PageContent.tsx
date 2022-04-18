import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    padding: '0 32px',
    margin: '0 auto',
    maxWidth: 1400,
  },
});

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const PageContent: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const classes = useStyles(props)
  const { className, children, ...other } = props;

  return (
    <div className={clsx(classes.root, className)} {...other}>
      {children}
    </div>
  );
};

export default PageContent