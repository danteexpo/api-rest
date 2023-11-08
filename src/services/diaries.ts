import { Diary, DiaryWithoutComment, DiaryWithoutId } from '../types';
import diariesData from './diariesData.json';

let diaries: Diary[] = diariesData as Diary[];

export const getDiaries = (): Diary[] => diaries;

export const getDiariesWithoutComments = (): DiaryWithoutComment[] =>
  diaries.map((diary) => {
    const { comment, ...localDiary } = diary;
    return localDiary;
  });

export const getDiary = (id: number): Diary | undefined => {
  const diary = diaries.find((diary) => diary.id === id);
  return diary;
};

export const postDiaries = (newDiaryInfo: DiaryWithoutId): Diary => {
  const { date, weather, visibility, comment } = newDiaryInfo;

  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    date,
    weather,
    visibility,
    comment,
  };

  diaries.push(newDiary);

  return newDiary;
};

export const updateDiary = (updatedDiary: Diary): Diary | undefined => {
  const updatedDiaries = diaries.map((diary) => {
    if (diary.id === updatedDiary.id) {
      return updatedDiary;
    }
    return diary;
  });

  diaries = updatedDiaries;

  return updatedDiary;
};

export const deleteDiary = (id: number): Diary | undefined => {
  const deletedDiary = diaries.find((diary) => diary.id === id);

  if (!deletedDiary) return undefined;

  const indexOfDeletedDiary = diaries.indexOf(deletedDiary);

  diaries.splice(indexOfDeletedDiary, 1);

  return deletedDiary;
};
