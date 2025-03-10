/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Button from './Button'
import styles, { layout } from '@/styles/styles'

export default function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-cat-gradient`}>
      <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Let&apos;s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payment and grow your bussiness anywhere on the planet.
      </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )
}
