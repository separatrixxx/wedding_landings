import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {  HowToGetInterface } from '../../../interfaces/data.interface';


export interface GetThereItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    hoToGet: HowToGetInterface,
}
