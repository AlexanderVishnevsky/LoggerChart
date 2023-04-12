import { Navbar, Button, Link, Text, useTheme, Switch } from '@nextui-org/react';

import { SunIcon, MoonIcon } from '@ts-icons';
import { useTheme as useNextTheme } from 'next-themes';

import Layout from '../Layout';

const collapseItems = [
    'Features',
    'Customers',
    'Pricing',
    'Company',
    'Legal',
    'Team',
    'Help & Feedback',
    'Login',
    'Sign Up',
];

const AppBar = (): JSX.Element => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    return (
        <Layout>
            <Navbar isBordered variant="sticky" maxWidth={'fluid'}>
                <Navbar.Brand>
                    <Navbar.Toggle aria-label="toggle navigation" />
                    <Text b color="inherit" hideIn="xs">
                        Chart
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">
                        Customers
                    </Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
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
                        <Navbar.CollapseItem key={item}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: '100%',
                                }}
                                href="#"
                            >
                                {item}
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
