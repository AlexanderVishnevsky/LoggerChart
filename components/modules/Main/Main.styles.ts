import { styled, CSS } from '@nextui-org/react';

import { Box } from '@common/Layout/Layout.styles';

export const MainLayout = styled(Box, {
    width: '100%',
    display: 'grid',
    justifyContent: 'center',
    gridAutoRows: '1fr',
    gridTemplateColumns: 'repeat(auto-fit, 220px)',
    paddingTop: '5em',
    gridRowGap: '1em',
    gridColumnGap: '1em',
});

export const Center: CSS = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
