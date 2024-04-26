import { Footer } from '../../components/Common/Footer/Footer';
import { ConfirmBlock } from '../../components/ConfirmBlock/ConfirmBlock';
import { DressCodeBlock } from '../../components/DressCodeBlock/DressCodeBlock';
import { LetterBlock } from '../../components/LetterBlock/LetterBlock';
import { MainBlock } from '../../components/MainComponents/MainBlock/MainBlock';
import { QuestionsBlock } from '../../components/Questions/QuestionsBlock/QuestionsBlock';
import { TimerBlock } from '../../components/Timer/TimerBlock/TimerBlock';
import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';


export const MainPage = (): JSX.Element => {
    

    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <MainBlock />
                <TimerBlock />
                <LetterBlock />
                <ConfirmBlock />
                <QuestionsBlock />
                <DressCodeBlock />
                <Footer />
            </div>
        </>
    );
};
