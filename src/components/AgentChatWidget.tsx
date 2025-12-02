import { useState } from 'react';
import * as React from 'react';
import { Button, Card, CloseButton, Form, InputGroup } from 'react-bootstrap';
import { IoSend } from 'react-icons/io5';

import style from './AgentChatWidget.module.css';

function AgentChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        setInputMessage('');
    };

    return (
        <div className={style.agentContainer}>

            {isOpen ?
                <Card className={style.card}>
                    <Card.Header className={style.cardHeader}>
                        <div className="d-flex align-items-center gap-2">
                            <img src="/logo/ai-logo.png" className={style.aiCardLogo} alt="Agent" />
                            <h5 className="m-0">Galactic Agent</h5>
                        </div>
                        <CloseButton variant="white" onClick={toggleChat} aria-label="Close chat" />
                    </Card.Header>
                    <Card.Body className={style.cardBody}>
                        <div className={style.cardBodyWelcomeText}>
                            <p>👋 How can I help you explore the cosmos today?</p>
                        </div>
                    </Card.Body>
                    <Card.Footer className={style.cardFooter}>
                        <Form onSubmit={handleSendMessage}>
                            <InputGroup className={style.inputGroup}>
                                <Form.Control
                                    as="textarea"
                                    rows={1}
                                    placeholder={'Ask me anything about space...'}
                                    className={style.chatInput}
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                />
                                <Button type="submit" variant="dark" className={style.sendButton}>
                                    <IoSend size={18}/>
                                </Button>
                            </InputGroup>
                        </Form>
                    </Card.Footer>
                </Card>
                : null}

            <div
                className={style.agentButton}
                onClick={toggleChat}
                tabIndex={0}
                aria-label="Toggle Agent Chat"
                role="button"
                onKeyDown={() => { /* empty */ }}
            >
                <img src="/logo/ai-logo.png" alt="agent logo" className={style.agentLogo} />
            </div>
        </div>
    );
};

export default AgentChatWidget;