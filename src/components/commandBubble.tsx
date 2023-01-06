import { GraphQLArgument } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useState } from 'react';
import CaretDown from '../assets/caretDown';
import styles from './commandBubble.module.css';
import InputBox from './inputBox';
import { argumentsToInputType } from './inputType';

type Props = {
  title: string;
  titleWidthInCh: number;
  description: Maybe<string>;
  input: readonly GraphQLArgument[];
};

export default function CommandBubble({
  title,
  titleWidthInCh,
  description,
  input,
}: Props) {
  let [isOpen, toggleOpen] = useState(false);
  return (
    <div className={`${styles.bubble} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header} onClick={() => toggleOpen((o) => !o)}>
        <div
          className={styles.title}
          style={{ minWidth: `${titleWidthInCh}ch` }}
        >
          {title}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.description}>{description}</div>
        <div className={styles.divider}> </div>
        <div className={styles.openClosedSwitch}>
          <CaretDown></CaretDown>
        </div>
      </div>
      <div className={styles.verticalDivider}></div>
      <div className={styles.bubbleContent}>
        <InputBox input={argumentsToInputType(input)} />
      </div>
    </div>
  );
}
