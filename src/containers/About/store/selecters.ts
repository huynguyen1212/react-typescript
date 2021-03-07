/*
 *
 * About selecters
 * make by phamthainb
 */
import rootReducer from 'src/redux/root-reducers';
// import { useSelector } from 'react-redux';

export const selectAboutStore = (state: ReturnType<typeof rootReducer>) =>
  state.About;
