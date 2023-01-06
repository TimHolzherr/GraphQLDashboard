import { ComplexInput, InputType } from './inputType';
import styles from './inputType.module.css';

type Props = {
  input: InputType | null;
  labelLength?: number;
};

function calculateLabelLength(input: ComplexInput) {
  return Math.max(
    ...input.fields.filter((f) => !('fields' in f)).map((f) => f.name.length)
  );
}

export default function InputBox({ input, labelLength }: Props) {
  if (!input) {
    return null;
  }
  if ('fields' in input) {
    // ComplexInput
    let labelLength = calculateLabelLength(input);
    return (
      <div className={styles.complexType}>
        <p className={styles.complexTypeName}>{input.name}</p>
        {input.fields.map((f) => (
          <InputBox input={f} labelLength={labelLength} key={f.name}></InputBox>
        ))}
      </div>
    );
  } else {
    // ScalarInput
    return (
      <div className={styles.scalarType}>
        <div
          className={styles.labelContainer}
          style={{ minWidth: `${labelLength ?? 0}ch` }}
        >
          <label className={styles.label} htmlFor={input.name}>
            {input.name}
          </label>
        </div>
        <div className={styles.valueContainer}>
          <input
            className={styles.input}
            type="text"
            name={input.name}
            id={input.name}
          ></input>
        </div>
      </div>
    );
  }
}
