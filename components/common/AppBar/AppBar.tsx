import { useRouter } from 'next/router';

import { Navbar, Button, Link, Text, useTheme, Switch } from '@nextui-org/react';

import { SunIcon, MoonIcon } from '@ts-icons';
import { useTheme as useNextTheme } from 'next-themes';

import { Routes } from '@/routing/routes';

import Layout from '../Layout';

const collapseItems = [
    { name: 'Column Chart', url: Routes.COLUMN_CHART },
    { name: 'Mix Chart', url: Routes.MIX_CHART },
];

const AppBar = (): JSX.Element => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const { pathname } = useRouter();

    return (
        <Layout>
            <Navbar isBordered variant="sticky" maxWidth={'fluid'}>
                <Navbar.Brand>
                    <Navbar.Toggle aria-label="toggle navigation" />
                    <Link href={Routes.MAIN} color="text">
                        <Text b color="inherit" hideIn="xs" css={{ margin: '0 12px' }}>
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
                    <Switch
                        color="error"
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                        iconOn={<MoonIcon filled />}
                        iconOff={<SunIcon filled />}
                    />
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem key={index}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: '100%',
                                }}
                                href={item.url}
                            >
                                {item.name}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                    <Switch
                        color="error"
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                        iconOn={<MoonIcon filled />}
                        iconOff={<SunIcon filled />}
                    />
                </Navbar.Collapse>
            </Navbar>
        </Layout>
    );
};
export default AppBar;
