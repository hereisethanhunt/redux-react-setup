export const SAVE_DROPDOWN_DATA = "SAVE_DROPDOWN_DATA";

export function saveDropdownData(values) {
  return {
    type: SAVE_DROPDOWN_DATA,
    payload: values
  };
}
