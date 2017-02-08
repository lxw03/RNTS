"use strict";
/**
 * Created by Zhihu on 2017/2/3.
 */
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const reducers_1 = require("../reducers");
let middlewares = [
    redux_thunk_1.default
];
let createAppStore = redux_1.applyMiddleware(...middlewares)(redux_1.createStore);
function configureStore() {
    return createAppStore(reducers_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
