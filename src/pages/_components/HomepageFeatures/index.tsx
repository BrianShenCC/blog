import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Translate, { translate } from '@docusaurus/Translate'

import styles from './styles.module.scss'

import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import SectionTitle from '../SectionTitle'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: ReactNode
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: 'TypeScript Developer',
    }),
    Svg: WebDeveloperSvg,
    description: translate({
      id: 'homepage.feature.developerDesc',
      message: 'TypeScript Developer',
    }),
  },
  {
    title: translate({
      id: 'homepage.feature.ai',
    }),
    Svg: SpiderSvg,
    description: translate({
      id: 'homepage.feature.aiDesc',
    }),
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
    }),
    Svg: OpenSourceSvg,
    description: translate({
      id: 'homepage.feature.enthusiastDesc',
    }),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      className={clsx(styles.featureContainer, 'container padding-vert--sm')}
    >
      <SectionTitle icon={'ri:map-pin-user-line'}>
        <Translate id="homepage.feature.title">个人特点</Translate>
      </SectionTitle>
      <div className={clsx('row', styles.features)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
