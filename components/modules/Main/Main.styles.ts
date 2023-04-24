import { styled, CSS } from '@nextui-org/react';

import { Box } from '@common/Layout/Layout.styles';

export const MainLayout = styled(Box, {
    height: '50vh',
    width: '30%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
});

export const Center: CSS = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
