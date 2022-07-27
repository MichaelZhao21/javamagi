import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageWrapper from '../../components/page-wrapper';

export const getServerSideProps: GetServerSideProps = async (context) => {
    // TODO: Data fetch call
    const content = 'hello mf world';
    return { props: { error: false, content } };
};

const ProblemDisplay: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <PageWrapper>
        <ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]} />
    </PageWrapper>
}

export default ProblemDisplay;
