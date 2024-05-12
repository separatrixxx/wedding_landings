import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AgendaInterface } from '../../../interfaces/data.interface';


export interface AgendaItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    agenda: AgendaInterface,
    type: '' | 'minimal' | 'romance' | 'photo',
}
