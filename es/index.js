// es/index.js

"use strict";

import { bulkIndex } from './bulkIndex';

module.exports = {
    bulkIndex: (res, index, type, data) => {
        return bulkIndex(res, index, type, data);
    },
};
