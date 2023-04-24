import { styled } from '@nextui-org/react';

import { Box } from '@common/Layout/Layout.styles';

export const ChartsLayout = styled(Box, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    paddingBottom: '120px',
});
