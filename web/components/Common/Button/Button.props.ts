import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	text: string,
    type: '' | 'minimal' | 'romance' | 'photo',
    subtype: 'dark' | 'light',
    isMain?: boolean,
	onClick: (e: any) => void,
}
