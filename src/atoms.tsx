import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export interface ICustomCategory {
    title: string;
    id: number;
}

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

// localStorage
const { persistAtom } = recoilPersist({
    key: "persist",
    storage: localStorage,
});

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
});

// CreateCategory
export const customCategoryState = atom<ICustomCategory[]>({
    key: "customCategory",
    default: [],
    effects_UNSTABLE: [persistAtom], // localStorage
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom], // localStorage
});

export const toDoSelector = selector({
    key:"toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    }
});