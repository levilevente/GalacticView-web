declare module 'react-image-magnifiers' {
    export interface GlassMagnifierProps extends React.ImgHTMLAttributes<HTMLImageElement> {
        imageSrc?: string;
        largeImageSrc?: string;
        className?: string;
        square?: boolean;
        magnifierSize?: string | number;
        magnifierBorderSize?: number;
        magnifierBorderColor?: string;
    }

    export const GlassMagnifier: React.ComponentType<GlassMagnifierProps>;
}
