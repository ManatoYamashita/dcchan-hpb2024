import Chat from "@/components/chat"
import styles from './page.module.scss';

export default function Talk() {
    return (
        <>
            <div className={styles.talk}>
                <h1>Comming Soon...</h1>
                <p><em className={styles.em}>『AIでじこんちゃん - as a ChatBot（仮）』</em>近日公開予定！</p>
                {/* <Chat /> */}
            </div>
        </>
    )
}