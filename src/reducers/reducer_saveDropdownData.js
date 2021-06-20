import { SAVE_DROPDOWN_DATA } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case SAVE_DROPDOWN_DATA:
      return action.payload;

    default:
      return state;
  }
}
