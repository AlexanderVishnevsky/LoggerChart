import { Switch, useTheme } from '@nextui-org/react';

import { MoonIcon, SunIcon } from '@ts-icons';
import { useTheme as useNextTheme } from 'next-themes';

const ThemeSwitcher = (): JSX.Element => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();
    return (
        <Switch
            color="error"
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            iconOn={<MoonIcon filled />}
            iconOff={<SunIcon filled />}
        />
    );
};

export default ThemeSwitcher;
