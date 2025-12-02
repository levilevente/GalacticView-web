import { useState } from 'react';

import { sendPromptToAgent } from '../api/agent.api.ts';

export interface ChatMessage {
    id: number;
    message: string;
    title?: string;
    content?: string;
    keyMetrics?: string[];
    sender: 'user' | 'agent';
    isError?: boolean;
    error?: string;
}

const useAgentChat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendMessage = async (msg: string) => {
        const userMessage: ChatMessage = {
            id: Date.now(),
            message: msg,
            sender: 'user',
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        try {
            const response = await sendPromptToAgent(msg);

            const agentMessage: ChatMessage = {
                id: Date.now() + 1,
                message: response.content,
                sender: 'agent',
                title: response.title,
                content: response.content,
                keyMetrics: response.keyMetrics,
            };

            setMessages((prev) => [...prev, agentMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = {
                id: Date.now() + 2,
                message: 'Sorry, there was an error processing your request.',
                sender: 'agent',
                isError: true,
                error: (error as Error).message,
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([]);
    };

    return {
        messages,
        isLoading,
        sendMessage,
        clearChat,
    };
};

export default useAgentChat;
