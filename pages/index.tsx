import { GetStaticProps, NextPage } from 'next';
import { FC } from 'react';
import { DynamicMain } from '@modules/Main';

const Index: FC<NextPage> = () => <DynamicMain />;

export const getStaticProps: GetStaticProps = async () => ({ props: {} });

export default Index;
