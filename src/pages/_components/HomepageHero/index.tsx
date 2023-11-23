import React from 'react'
import { Variants, motion, useScroll, useTransform } from 'framer-motion' // Import motion from framer-motion

import Translate from '@docusaurus/Translate'

import HeroMain from './img/hero_main2.svg'

import styles from './styles.module.scss'
import SocialLinks from '@site/src/components/SocialLinks'

import { Icon, IconProps } from '@iconify/react'

const variants: Variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, y: 30 },
}

function Logos() {
  const { scrollYProgress } = useScroll()

  // 往下滚动 元素向上移动
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-500%'], {
    clamp: false,
  })

  // 往下滚动 元素向下移动
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '500%'], {
    clamp: false,
  })

  const logos: IconProps[] = [
    {
      icon: 'devicon:rxjs',
      style: { top: '7%', left: '9%' },
    },
    {
      icon: 'logos:angular-icon',
      style: { top: '3%', left: '4%' },
    },

    {
      icon: 'logos:react',
      style: { top: '7%', right: '2%' },
    },
    {
      icon: 'logos:nextjs-icon',
      style: { top: '3%', right: '8%' },
    },

    {
      icon: 'logos:tailwindcss-icon',
      style: { top: '5%', left: '52%' },
    },
    {
      icon: 'logos:typescript-icon',
      style: { top: '9%', left: '58%' },
    },

    {
      icon: 'logos:nodejs-icon-alt',
      style: { top: '9%', left: '30%' },
    },
    {
      icon: 'logos:nestjs',
      style: { top: '3%', left: '38%' },
    },
  ]

  return (
    <>
      {logos.map((l, index) => {
        const yValue = index % 2 === 0 ? y1 : y2

        return (
          <motion.div
            className={styles.box}
            initial={{ opacity: 0.01, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: Math.random() * 2 + 0.5,
              delay: 0.5,
            }}
            style={{
              ...l.style,
              y: yValue,
            }}
            key={index}
          >
            <Icon icon={l.icon}></Icon>
          </motion.div>
        )
      })}
    </>
  )
}

function Background() {
  return (
    <>
      <motion.div className={styles.background}>
        <Logos />
        <HeroMain style={{ marginTop: 80 }} />
        <div className={styles.circle} />
      </motion.div>
    </>
  )
}

function Name() {
  return (
    <motion.div
      className={styles.hero_text}
      custom={1}
      initial="hidden"
      animate="visible"
      variants={variants}
      onMouseMove={e => {
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`)
      }}
    >
      <Translate id="homepage.hero.greet">Hello! I am </Translate>
      <span
        className={styles.name}
        onMouseMove={e => {
          const bounding = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--positionX', `${bounding.x}px`)
          e.currentTarget.style.setProperty('--positionY', `${bounding.y}px`)
        }}
      >
        <Translate id="homepage.hero.name">Brian Shen</Translate>
      </span>
      <span className={styles.wave}>👋</span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        <Name />
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Translate id="homepage.hero.text">
            {`Here, I will share the problems encountered with various technology stacks and their solutions, take you to understand the latest technology stacks and how to apply them in actual development, and hope that my development experience will inspire you.`}
          </Translate>
        </motion.p>
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <SocialLinks />
        </motion.div>

        <motion.div
          className={styles.buttonGroup}
          custom={4}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className={styles.outer}>
            <div className={styles.gradient} />
            <a className={styles.button} href={'./about'}>
              <Translate id="hompage.hero.introduce">About me</Translate>
            </a>
          </div>
        </motion.div>
      </div>
      <Background />
    </motion.div>
  )
}
