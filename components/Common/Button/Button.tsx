import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';


export const Button = ({ type, subtype, text, isMain, onClick }: ButtonProps): JSX.Element => {
    return <button className={cn(styles.button, {
        [styles.buttonMinimal]: type === 'minimal',
        [styles.buttonRomance]: type === 'romance',
        [styles.buttonPhoto]: type === 'photo',
        [styles.buttonLight]: subtype === 'light',
        [styles.buttonMain]: isMain,
    })} onClick={onClick}>
        {text}
    </button>
};