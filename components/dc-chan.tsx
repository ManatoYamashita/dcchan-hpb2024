"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import styles from "@/styles/dc-chan.module.scss";
import dcchan_default from "@/public/images/dcchan.webp";
import dcchanWebm from "@/public/images/v.webm";
import dcchanMov from "@/public/images/v.mov";

function DCchan() {
    const zoomLevel = 2;
    const zoomWindowSize = 200;

    const [isClient, setIsClient] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const mediaRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsClient(true);
      }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (mediaRef.current) {
          const rect = mediaRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setPosition({ x, y });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    if (!isClient) {
        return null; // サーバーサイドレンダリング時は何も表示しない
      }

    return(
        <section className={styles.dcchan}>
            {/* <Image
                ref={mediaRef}
                src={dcchan_default}
                alt="dc-chan"
                fill
                className={styles.image}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                priority
                draggable={false}
            /> */}
            <video
                muted
                playsInline
                autoPlay
                preload='auto'
                ref={mediaRef}
                className={styles.image}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <source src={dcchanMov} type="video/mov" />
                <source src={dcchanWebm} type="video/webm" />
                {/* <Image
                    src={dcchan_default}
                    alt="dc-chan"
                    fill
                    className={styles.image}
                    priority
                    draggable={false}
                /> */}
            </video>

            {isHovered && mediaRef.current && (
                <div
                className={styles.zoomWindow}
                style={{
                    // width: zoomWindowSize,
                    // height: zoomWindowSize,
                    // top: position.y - zoomWindowSize / 2,
                    backgroundImage: `url(${dcchan_default.src})`,
                    backgroundSize: `${mediaRef.current.width * zoomLevel}px ${
                    mediaRef.current.height * zoomLevel
                    }px`,
                    backgroundPosition: `-${position.x * zoomLevel - zoomWindowSize / 2}px -${
                    position.y * zoomLevel - zoomWindowSize / 2
                    }px`,
                }}
                />
            )}
        </section>
    );
}

export default DCchan;

// ver1.0