import Image from "next/image";
import styles from "@/styles/card.module.scss";
import Link from "next/link";
import pImg from "@/public/images/ang.jpg";
import headImg from "@/public/images/nomi.jpg";

type Props = {
    title: string
    subtitle: string
    description: string
}

function Card({ title, subtitle, description }: Props) {
    return (
        <section className={styles.card}>
            <Link href="" className={styles.container}>
                <Image src={headImg} className={styles.card__image} alt="header image" fill
                    // The card is about 50vw wide. On narrow portrait screens the 33vh-tall card is narrower than the
                    // image's aspect ratio, so object-fit: cover draws it wider than the card; keep 100vw there.
                    sizes="(max-width: 480px) 100vw, 50vw" priority />
                <div className={styles.card__overlay}>
                    <div className={styles.card__header}>
                        <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <Image className={styles.card__thumb} src={pImg} alt="icon image" width={64} height={64} />
                        <div className={styles.card__header_text}>
                            <h3 className={styles.card__title}>
                                { title }
                            </h3>            
                            <span className={styles.card__status}>
                                { subtitle }
                            </span>
                        </div>
                    </div>
                    <p className={styles.card__description}>
                        { description }
                    </p>
                </div>
            </Link>
        </section>
    );
}

export default Card;