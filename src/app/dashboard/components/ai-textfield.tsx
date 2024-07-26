import { useEffect, useRef } from 'react';

const AiTextField = (props:any) => {
    const textareaRef = useRef(null);

    const handleTextareaChange = (e:any) => {
        props.setQuestions(e.target.value);
    };

    useEffect(() => {
        const textarea:any = textareaRef.current;
        if (textarea) {
            textarea.style.height = '44px';

            if (textarea.scrollHeight > textarea.clientHeight) {
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        }
    }, [props.questions]);

    return (
        <textarea
            ref={textareaRef}
            style={{
                width: "100%",
                height: "50px",
                maxHeight: "500px",
                fontSize: 14,
                padding: "10px",
                paddingLeft: '10px',
                paddingRight: '36px',
                outline: "none",
                borderRadius: "15px",
                resize: 'none',
                color: '#000000',
                backgroundColor: '#FFFFFF',
            }}
            onKeyDown={props.handleSubmit}
            value={props.questions}
            onChange={handleTextareaChange}
            className={"scrollbar-hide"}
            placeholder={"Ask me anything about bringing nature to life through art! Whether it's about painting techniques, color choices, or creating beautiful scenes in the Bob Ross style, I'm here to help you every step of the way."}
        />
    );
};

export default AiTextField;
