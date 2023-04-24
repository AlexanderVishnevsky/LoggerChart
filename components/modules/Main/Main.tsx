import { useRouter } from 'next/router';

import { Card, Text } from '@nextui-org/react';

import { Routes } from '@/routing/routes';

import * as S from './Main.styles';

const Main = (): JSX.Element => {
    const router = useRouter();
    return (
        <S.MainLayout>
            <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: '200px', h: '200px' }}
                onClick={() => router.push(Routes.COLUMN_CHART)}
            >
                <Card.Body css={S.Center}>
                    <Text
                        h4
                        size={24}
                        css={{
                            textGradient: '45deg, $blue600 -20%, $pink600 50%',
                        }}
                    >
                        Column Chart
                    </Text>
                </Card.Body>
            </Card>
            <Card
                isPressable
                isHoverable
                variant="bordered"
                css={{ mw: '200px', h: '200px' }}
                onClick={() => router.push(Routes.MIX_CHART)}
            >
                <Card.Body css={S.Center}>
                    <Text
                        h4
                        size={24}
                        css={{
                            textGradient: '45deg, $yellow600 -20%, $red600 100%',
                        }}
                    >
                        Mix Chart
                    </Text>
                </Card.Body>
            </Card>
        </S.MainLayout>
    );
};

export default Main;
