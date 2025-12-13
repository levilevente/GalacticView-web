import DOMPurify from 'dompurify';

import style from './SafeHtml.module.css';

interface SafeHtmlProps {
    htmlContent: string | undefined;
}

const SafeHtml = ({ htmlContent }: SafeHtmlProps) => {
    const sanitizeFn = (DOMPurify as unknown as { sanitize: (dirty: string) => string }).sanitize;
    const cleanHtml: string = sanitizeFn(htmlContent ?? '');

    return <div className={style.formattedText} dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default SafeHtml;
