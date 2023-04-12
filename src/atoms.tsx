import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
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

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom], // localStorage
});

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
});

export const toDoSelector = selector({
    key:"toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    }
});