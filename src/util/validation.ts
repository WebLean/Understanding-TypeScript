// Validation
export interface Validatable {
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
export function validate(validatableInput: Validatable) {
  let isValid = true;
  const { value, required, minLength, maxLength, min, max } = validatableInput;

  if (required) isValid = isValid && value.trim().length > 0;
  if (minLength != null && typeof value === 'string')
    isValid = isValid && value.length >= minLength;
  if (maxLength != null && typeof value === 'string')
    isValid = isValid && value.length <= maxLength;
  if (min != null) isValid = isValid && +value >= min;
  if (max != null) isValid = isValid && +value <= max;

  return isValid;
}
