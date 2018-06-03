"use strict";

exports.env = function () {
    return process.env
}

exports.lookupEnvImpl = function (variableName) {
    return function () {
        process.env[variableName]
    }
}
