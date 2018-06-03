"use strict";

exports.lookupEnvImpl = function (variableName) {
    return function () {
        process.env[variableName]
    }
}
