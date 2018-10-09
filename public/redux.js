const BIRTH = 'BIRTH';
const BIRTHDAY = 'BIRTHDAY';

const birth = {
  type: BIRTH,
};

const birthday = {
  type: BIRTHDAY,
};

const defaultState = {
  age: null,
};

const reducer = (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
