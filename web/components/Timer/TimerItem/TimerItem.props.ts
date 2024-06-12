import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TimerItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: '' | 'minimal' | 'romance' | 'photo',
    num: number,
	text: string,
}
