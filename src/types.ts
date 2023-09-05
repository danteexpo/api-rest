export enum Weather {
	Sunny = "sunny",
	Rainy = "rainy",
	Windy = "windy",
	Cloudy = "cloudy",
	Stormy = "stormy",
}

export enum Visibility {
	Great = "great",
	Good = "good",
	Ok = "ok",
	Poor = "poor",
}

export interface Diary {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}

export type DiaryWithoutComment = Omit<Diary, "comment">;

export type DiaryWithoutId = Omit<Diary, "id">;
