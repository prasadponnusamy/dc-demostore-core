import React from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import clsx from 'clsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        '&:first-child': {
            borderTop: '1px solid #cbcbcb'
        }
    },
    accordion: {
        boxShadow: 'unset',
        borderBottom: '1px solid #cbcbcb',
    },
    summary: {
        padding: 0
    },
    details: {
        padding: 0
    },
    title: {
        fontSize: 13,
        color: '#231f20',
        fontWeight: 'bold' as 'bold',
        textTransform: 'uppercase' as 'uppercase'
    },
    status: {
        marginTop: 10,
        fontSize: 12,
        color: '#666'
    }
});

interface Props {
    className?: string;
    style?: React.CSSProperties;
    title: string;
}

const ProductFacet: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const classes = useStyles(props)
    const {
        className,
        title,
        children,
        ...other
    } = props;

    return (
        <div className={clsx(classes.root, className)} {...other}>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
                    <div>
                        <Typography className={classes.title}>{title}</Typography>
                        <Typography className={classes.status}>All</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ProductFacet