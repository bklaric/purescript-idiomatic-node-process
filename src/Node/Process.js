"use strict";

exports.lookupEnvImpl = function (variableName) {
    return function () {
        return process.env[variableName]
    }
}
