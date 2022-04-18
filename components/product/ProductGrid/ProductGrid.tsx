import React from 'react';
import { Theme } from '@mui/material';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'grid',
        gridRowGap: 1,
        gridColumnGap: 1,
        gridTemplateColumns: 'repeat(3,calc(33.3333% - 48.00016px))',
        marginBottom: 40,

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2,calc(50% - 1.00016px))'
        }
    }
}));

interface Props {
    className?: string;
    style?: React.CSSProperties;
}

const ProductGrid: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const classes = useStyles(props)
    const {
        className,
        children,
        ...other
    } = props;

    return (
        <div className={clsx(classes.root, className)} {...other}>
            {children}
        </div>
    );
};

export default ProductGrid