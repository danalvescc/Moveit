import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const {minutes, seconds, hasFinished, active, startCountdown, resetCountdown} = useContext(CountdownContext)

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{ Math.trunc(minutes / 10) }</span>
                    <span>{ minutes % 10}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ Math.trunc(seconds / 10)  }</span>
                    <span>{ seconds % 10 }</span>
                </div>
            </div>
            
            {
                hasFinished ? (
                    <button 
                        disabled
                        type="button" 
                        className={styles.countdownButton}>
                        Ciclo encerrado
                    </button>
                ) : (
                    <>
                        {
                            active? (
                            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                                Reiniciar Ciclo
                            </button>
                            ): (
                            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                                Iniciar um ciclo
                            </button>
                            )
                        }
                    </>
                )
            }

            
            
        </div>
    )
}