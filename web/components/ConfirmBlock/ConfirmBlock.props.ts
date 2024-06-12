import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ConfirmBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setActive: (e: boolean) => void,
}
