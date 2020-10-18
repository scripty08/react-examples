import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
SyntaxHighlighter.registerLanguage('jsx', jsx);

export const Code = (props) => {
    const {
        children,
    } = props;

    return (
        <SyntaxHighlighter language="javascript" style={darcula}>
            {children}
        </SyntaxHighlighter>
    );
};
