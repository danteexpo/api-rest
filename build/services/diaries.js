"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDiaries = exports.getDiary = exports.getDiariesWithoutComments = exports.getDiaries = void 0;
const diariesData_json_1 = __importDefault(require("./diariesData.json"));
const diaries = diariesData_json_1.default;
const getDiaries = () => diaries;
exports.getDiaries = getDiaries;
const getDiariesWithoutComments = () => diaries.map(diary => {
    const { comment } = diary, localDiary = __rest(diary, ["comment"]);
    return localDiary;
});
exports.getDiariesWithoutComments = getDiariesWithoutComments;
const getDiary = (id) => {
    const diary = diaries.find(diary => diary.id === id);
    return diary;
};
exports.getDiary = getDiary;
const postDiaries = (newDiaryInfo) => {
    const { date, weather, visibility, comment } = newDiaryInfo;
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        date,
        weather,
        visibility,
        comment,
    };
    diaries.push(newDiary);
    return newDiary;
};
exports.postDiaries = postDiaries;
