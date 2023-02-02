import { CHANGE_BRUSH_COLOR } from "./actionTypes";

export const changeBrushColor = (payload) => ({
  type: CHANGE_BRUSH_COLOR,
  payload,
});