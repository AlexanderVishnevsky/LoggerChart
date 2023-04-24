import { styled } from '@nextui-org/react';

export const ColumnChartLayout = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& #switcher': {
        marginLeft: '50px',
        marginRight: '12px',
    },

    '@media (max-width: 580px)': {
        flexDirection: 'column',

        '& h6': {
            marginTop: '24px',
            height: '36px',
        },

        '& #checkbox-group': {
            order: 2,
        },
    },
});
