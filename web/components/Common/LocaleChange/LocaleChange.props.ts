import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface LocaleChangeProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: '' | 'minimal' | 'romance' | 'photo',
}
