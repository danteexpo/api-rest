"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseDate = (date) => {
    if (!isString(date) || !isDate(date)) {
        throw new Error("Invalid or missing date");
    }
    return date;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseWeather = (weather) => {
    if (!isString(weather) || !isWeather(weather)) {
        throw new Error("Invalid or missing weather");
    }
    return weather;
};
const isWeather = (weather) => {
    return Object.values(types_1.Weather).includes(weather);
};
const parseVisibility = (visibility) => {
    if (!isString(visibility) || !isVisibility(visibility)) {
        throw new Error("Invalid or missing visibility");
    }
    return visibility;
};
const isVisibility = (visibility) => {
    return Object.values(types_1.Visibility).includes(visibility);
};
const parseComment = (comment) => {
    if (!isString(comment)) {
        throw new Error("Invalid or missing comment");
    }
    return comment;
};
const isString = (string) => {
    return typeof string === "string" || string instanceof String;
};
const toNewDiary = (object) => {
    const newDiary = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    };
    return newDiary;
};
exports.default = toNewDiary;
