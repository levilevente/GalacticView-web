import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root.tsx';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Could not find root element');
}

createRoot(root).render(
        <Root />
);
