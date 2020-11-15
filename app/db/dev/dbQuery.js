import pool from './pool';

export default {
  query(queryText, params) {
    return pool.query(queryText, params);
  },
};
