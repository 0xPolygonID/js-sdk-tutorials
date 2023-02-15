import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to use',
    description: (
      <>
        SDK was designed from the ground up to be easily installed and
        used to get your website or mobile up and running quickly.
      </>
    ),
  },
  {
    title: 'Unique technologies',
    description: (
      <>
        ZKP groth16 and JSON-LD merklization in your browser. 
        Core iden3 protocol libraries brings to life full flow of identity creation and credential issuance.
      </>
    ),
  },
  {
    title: 'All in one',
    description: (
      <>
        Manage credential and identity wallets. Handle protocol request and generate proofs.

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
     
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
