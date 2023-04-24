import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react';

const DropDown = (): JSX.Element => (
    <Dropdown placement="bottom-right">
        <Navbar.Item>
            <Dropdown.Trigger>
                <Avatar bordered as="button" text="Admin" textColor="error" size="md" />
            </Dropdown.Trigger>
        </Navbar.Item>
        <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}
        >
            <Dropdown.Item key="profile" css={{ height: '$18' }}>
                <Text b color="inherit" css={{ d: 'flex' }}>
                    Signed in as
                </Text>
                <Text b color="inherit" css={{ d: 'flex' }}>
                    admin@example.com
                </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
                My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
                Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
                Log Out
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default DropDown;
