/* eslint-disable no-unused-vars */

import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const response = await read();
        const result = await json(response);
        return result;
      } catch (error) {
        throw new Error('error');
      }
    })();
  }
}
