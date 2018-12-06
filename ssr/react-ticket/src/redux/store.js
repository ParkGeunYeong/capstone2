import configureStore from './configureStore';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

export default configureStore(typeof window === 'undefined' ? undefined : state);