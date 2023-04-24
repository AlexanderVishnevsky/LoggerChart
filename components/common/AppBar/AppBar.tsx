import { useRouter } from 'next/router';

import { Navbar, Link, Text, useTheme } from '@nextui-org/react';

import { FavIcon } from '@ts-icons';
import { useTheme as useNextTheme } from 'next-themes';
import { DynamicThemeSwitcher } from '@common/AppBar/components/ThemeSwitcher';
import { DynamicDrawer } from '@common/AppBar/components/Drawer';

import { Routes } from '@/routing/routes';

import Layout from '../Layout';

import { DynamicDropDown } from './components/DropDown';

const AppBar = (): JSX.Element => {
    const { pathname } = useRouter();

    return (
        <Layout>
            <Navbar isBordered variant="sticky" maxWidth={'fluid'}>
                <Navbar.Brand>
                    <Navbar.Toggle aria-label="toggle navigation" css={{ mr: '24px' }} />
                    <Link href={Routes.MAIN} color="text">
                        <FavIcon />
                        <Text b color="inherit" hideIn="xs" css={{ m: '0 12px' }}>
                            Chart
                        </Text>
                    </Link>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    <Navbar.Link isActive={pathname.includes('slug')} href={Routes.COLUMN_CHART}>
                        Column chart
                    </Navbar.Link>
                    <Navbar.Link isActive={pathname === Routes.MIX_CHART} href={Routes.MIX_CHART}>
                        Mix Chart
                    </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <DynamicThemeSwitcher />
                    <DynamicDropDown />
                </Navbar.Content>
                <DynamicDrawer />
            </Navbar>
        </Layout>
    );
};
export default AppBar;
