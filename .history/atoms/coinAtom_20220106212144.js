import { atom } from 'recoil';

export const coinsDataState = atom({
  key: 'coinsDataStateKey',
  default: [],
});

export const coinIdState = atom({
  key: 'coinIdStateKey',
  default: '',
});
