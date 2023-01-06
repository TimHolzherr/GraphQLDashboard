import { GraphQLArgument, astFromValue, GraphQLScalarType, GraphQLInputObjectType, GraphQLNonNull, GraphQLInputType } from "graphql";
import { Maybe } from "graphql/jsutils/Maybe";
import styles from "./commandBubble.module.css";
import InputBox from "./inputBox";
import { argumentsToInputType } from "./inputType";

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
  input
}: Props) {      
  return (
    <div className={styles.bubble}>
      <div className={styles.header}>
        <div
          className={styles.title}
          style={{ minWidth: `${titleWidthInCh}ch` }}
        >
          {title}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.description}>{description}</div>
        <div className={styles.divider}> </div>
        <div className={styles.openClosedSwitch}>&#5167;</div>
      </div>
      <div className={styles.verticalDivider}></div>
      <div className={styles.bubbleContent}>
        <InputBox input={argumentsToInputType(input)} />
      </div>
    </div>
  );
}
