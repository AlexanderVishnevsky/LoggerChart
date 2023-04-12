import { JSXChild } from '@/model/typings/common';

import * as S from './Layout.styles';

const Layout = ({ children }: JSXChild): JSX.Element => (
    <S.Box
        css={{
            maxW: '100%',
        }}
    >
        {children}
    </S.Box>
);

export default Layout;
