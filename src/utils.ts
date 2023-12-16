import { DiaryWithoutId, Weather, Visibility, Diary } from "./types";

const parseDate = (date: any): string => {
	if (!isString(date) || !isDate(date)) {
		throw new Error("Invalid or missing date");
	}

	return date;
};

const isDate = (date: any): boolean => {
	return Boolean(Date.parse(date));
};

const parseWeather = (weather: any): Weather => {
	if (!isString(weather) || !isWeather(weather)) {
		throw new Error("Invalid or missing weather");
	}

	return weather;
};

const isWeather = (weather: any): boolean => {
	return Object.values(Weather).includes(weather);
};

const parseVisibility = (visibility: any): Visibility => {
	if (!isString(visibility) || !isVisibility(visibility)) {
		throw new Error("Invalid or missing visibility");
	}

	return visibility;
};

const isVisibility = (visibility: any): boolean => {
	return Object.values(Visibility).includes(visibility);
};

const parseComment = (comment: any): string => {
	if (!isString(comment)) {
		throw new Error("Invalid or missing comment");
	}

	return comment;
};

const isString = (string: any): boolean => {
	return typeof string === "string" || string instanceof String;
};

export const toNewDiary = (object: any): DiaryWithoutId => {
	const newDiary: DiaryWithoutId = {
		date: parseDate(object.date),
		weather: parseWeather(object.weather),
		visibility: parseVisibility(object.visibility),
		comment: parseComment(object.comment),
	};

	return newDiary;
};

export const toUpdatedDiary = (object: any): Diary => {
	const updatedDiary: Diary = {
		id: object.id,
		date: parseDate(object.date),
		weather: parseWeather(object.weather),
		visibility: parseVisibility(object.visibility),
		comment: parseComment(object.comment),
	};

	return updatedDiary;
};
