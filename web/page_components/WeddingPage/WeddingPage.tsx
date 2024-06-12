import styles from './WeddingPage.module.css';
import { AgendaBlock } from '../../components/Agenda/AgendaBlock/AgendaBlock';
import { Footer } from '../../components/Common/Footer/Footer';
import { ConfirmBlock } from '../../components/ConfirmBlock/ConfirmBlock';
import { DressCodeBlock } from '../../components/DressCodeBlock/DressCodeBlock';
import { LetterBlock } from '../../components/LetterBlock/LetterBlock';
import { MainBlock } from '../../components/MainComponents/MainBlock/MainBlock';
import { MapBlock } from '../../components/MapBlock/MapBlock';
import { MessageBlock } from '../../components/MessageBlock/MessageBlock';
import { QuestionsBlock } from '../../components/Questions/QuestionsBlock/QuestionsBlock';
import { TimerBlock } from '../../components/Timer/TimerBlock/TimerBlock';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { AppState } from '../../features/store/store';
import cn from 'classnames';


export const WeddingPage = (): JSX.Element => {
    const data = useSelector((state: AppState) => state.data.data);

    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={cn(styles.wrapper, {
                [styles.wrapperMinimal]: data.theme === 'minimal',
                [styles.wrapperRomance]: data.theme === 'romance',
                [styles.wrapperPhoto]: data.theme === 'photo',
            })}>
                <MainBlock />
                {
                    data.blocks.timer ?
                        <TimerBlock />
                    : <></>
                }
                <LetterBlock />
                <ConfirmBlock />
                {
                    data.blocks.questions ?
                        <QuestionsBlock />
                    : <></>
                }
                {
                    data.blocks.dressCode ?
                        <DressCodeBlock />
                    : <></>
                }
                {
                    data.blocks.agenda ?
                        <AgendaBlock />
                    : <></>
                }
                {
                    data.blocks.message ?
                        <MessageBlock />
                    : <></>
                }
                <MapBlock />
                <Footer />
            </div>
        </>
    );
};
