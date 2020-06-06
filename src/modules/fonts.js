import produce from 'immer';

const UPDATE_FONTS = 'UPDATE_FONTS';
const ADD_FONT = 'ADD_FONT';
const REMOVE_FONT_BY_ID = 'REMOVE_FONT_BY_ID';
const REMOVE_FONT_BY_INDEX = 'REMOVE_FONT_BY_INDEX';

export const uuid = () =>
  `${Math.random().toString(36).substring(2) + Date.now().toString(36)}`;

export function addFont({ metrics, blob }) {
  return {
    type: ADD_FONT,
    payload: { metrics, blob },
  };
}

export function removeFontByIndex(idx) {
  return {
    type: REMOVE_FONT_BY_INDEX,
    payload: idx,
  };
}

export function removeFontById(id) {
  return {
    type: REMOVE_FONT_BY_ID,
    payload: id,
  };
}

export function updateFonts(fonts) {
  return {
    type: UPDATE_FONTS,
    payload: fonts,
  };
}

const initialState = {
  fonts: [],
};

export const fonts = produce((state = initialState, action) => {
  switch (action.type) {
    case ADD_FONT:
      const { metrics, blob } = action.payload;
      state.fonts.push({
        id: uuid(),
        metrics,
        blob,
        config: {
          text:
            'I would like you to speak to the medical doctors to see if there’s any way that you can apply light and heat to cure. You know? If you could? And maybe you can, maybe you can’t. Again, I say maybe you can, maybe you can’t. I’m not a doctor. But I’m a person that has a good… You know what. ',
          fontSize: 42,
          lineHeight: 1.15,
        },
      });
      break;
    case REMOVE_FONT_BY_INDEX:
      state.fonts.splice(action.payload, 1);
      // draft.newToDo = action.value;
      break;
    case UPDATE_FONTS:
      state.fonts = action.payload;

      break;
    default:
      return state;
  }
});
