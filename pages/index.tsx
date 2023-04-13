import { Card, Text } from '@nextui-org/react';

import { Box } from '@common/Layout/Layout.styles';
import { FC } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Index: FC<NextPage> = () => {
    const router = useRouter();
    return (
        <Box
            css={{
                height: '50vh',
                width: '30%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: '0 auto',
            }}
        >
            <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: '200px', h: '200px' }}
                onClick={() => router.push('/charts/stay-fit')}
            >
                <Card.Body css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        h4
                        size={24}
                        css={{
                            textGradient: '45deg, $blue600 -20%, $pink600 50%',
                        }}
                    >
                        Stay-Fit Chart
                    </Text>
                </Card.Body>
            </Card>
            <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: '200px', h: '200px' }}
                onClick={() => router.push('/charts/demo')}
            >
                <Card.Body css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        h4
                        size={24}
                        css={{
                            textGradient: '45deg, $yellow600 -20%, $red600 100%',
                        }}
                    >
                        Demo Chart
                    </Text>
                </Card.Body>
            </Card>
        </Box>
    );
};
export default Index;
