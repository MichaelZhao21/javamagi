import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PageWrapper from '../../components/page-wrapper';

const markdownComponents = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    // TODO: Data fetch call
    const content =
        'This is the main problem statement, written in markdown. Impedit et sapiente similique et recusandae voluptatem ut. Ab aperiam repellendus voluptates temporibus accusantium alias ratione. Beatae autem tempore nostrum libero. Quidem velit quia ducimus quia est et nihil consectetur. Quia voluptatem ipsa a omnis vitae eligendi debitis laudantium. Id quibusdam enim non ut.\n\nAut odit est voluptas minima fugiat omnis qui sed. Sed dolore qui est quis repellendus. Minima eum quae modi placeat quae. Molestiae at consequatur repellendus earum minima quos velit quibusdam. Totam molestiae qui dolor.\n\n# Constraints\n\nSapiente maiores veritatis aut omnis nam nihil qui. Deserunt voluptatum nobis praesentium doloremque aut ut soluta autem. Recusandae dolor blanditiis sapiente. Ea similique accusamus in optio est qui explicabo vel. Tenetur velit pariatur ea expedita.\n\n# Sample Test Cases\n\nInput\n\n```text\n3\n```\n\nOutput\n\n```text\nHello world world world!\n```\n\n# Starter Code\n\n```java\nimport java.util.*\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner scan = new Scanner(System.in);\n        int n = scan.nextInt();\n\n        // Print hello here\n        for (int i = 0; i < n; i++) {\n            // Print world here\n        }\n    }\n}\n```';
    return { props: { error: false, content } };
};

/**
 * Display page for a single problem, given by the ID in the URL
 */
const ProblemDisplay: NextPage = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    return (
        <PageWrapper header="Canned Beans" prev="/problem" style={{ paddingBottom: '3rem' }}>
            <ReactMarkdown
                children={props.content}
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
            />

            <h1 className="title">Code Submission</h1>
            <button>Upload File(s)</button>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '3rem' }}>
                <button>Test Code</button>
                <button className="secondary">Submit Code</button>
            </div>

            <h1 className="title">Test Results</h1>
        </PageWrapper>
    );
};

export default ProblemDisplay;
