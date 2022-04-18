import React from 'react';
import { Theme, Card } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles'
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        borderLeft: `6px solid ${theme.palette.primary.main}`,
        width: '100%',
        marginBottom: theme.spacing()
    }
}));

interface Props {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactElement[]
}

const AdminCard: React.FC<Props> = (props) => {
    const classes = useStyles(props)
    const {
        className,
        children,
        ...other
    } = props;

    return (
        <Card className={clsx(classes.root, className)} {...other}>
            {children}
        </Card>
    );
};

export default AdminCard