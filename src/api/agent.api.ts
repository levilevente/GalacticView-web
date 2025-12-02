import axios from 'axios';

import type { AgentDataTypeIn, AgentPromptTypeOut } from '../types/AgentDataType.ts';
import { getUTCDateString } from '../utils/dateUtils.ts';

export const agentApi = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export async function sendPromptToAgent(message: string):Promise<AgentDataTypeIn> {
    const promptData: AgentPromptTypeOut = {
        question: message,
        date: getUTCDateString(new Date()),
    };
    const res = await agentApi.post<AgentDataTypeIn>('/chat', promptData);
    return res.data;
}