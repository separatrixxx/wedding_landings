import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';


export const Button = ({ type, subtype, text, onClick }: ButtonProps): JSX.Element => {
    return <button className={cn(styles.button, {
        [styles.buttonMinimal]: type === 'minimal',
        [styles.buttonMinimalLight]: subtype === 'light',
    })} onClick={onClick}>
        {text}
    </button>
};