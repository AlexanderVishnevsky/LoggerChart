import { Link, Navbar } from '@nextui-org/react';

import { DynamicThemeSwitcher } from '@common/AppBar/components/ThemeSwitcher';

import { Routes } from '@/routing/routes';

const collapseItems = [
    { name: 'Column Chart', url: Routes.COLUMN_CHART },
    { name: 'Mix Chart', url: Routes.MIX_CHART },
];

const Drawer = (): JSX.Element => (
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
        <DynamicThemeSwitcher />
    </Navbar.Collapse>
);

export default Drawer;
