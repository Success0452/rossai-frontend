import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import SyntaxHighlighter from 'react-syntax-highlighter';
import agate from 'react-syntax-highlighter/dist/esm/styles/hljs/agate';
import 'github-markdown-css';
import './index.css';

const Markdown = ({ children, className }) => {
    return (
        <div className={clsx(className, 'markdown-body')}>
            <div className="shadow-md bg-white p-[15px] rounded-lg">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code({ className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return match ? (
                                <SyntaxHighlighter
                                    style={agate}
                                    language={match[1]}
                                    showLineNumbers
                                    lineNumberStyle={{ color: '#999' }}
                                    PreTag="div"
                                    {...props}
                                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >{children}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Markdown;
