export default (state = null, action) => {
  switch (action.type) {
    case 'Select_library':
      return action.payload;  
    default:
      return state;
  }
};

