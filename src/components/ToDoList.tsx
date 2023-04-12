import { useRecoilValue, useRecoilState } from "recoil";
import { Categories, categoryState, customCategoryState, toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
    // CreateCategory
    const customCategories = useRecoilValue(customCategoryState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    // 항목 삭제 기능 추가
    const addCategory = () => {
        const newCategory = "Add a new category..."

    };
    return (
        <div>
            <h1>To Do List</h1>
            <hr />
            <CreateCategory />
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Dos</option>
                <option value={Categories.DOING}>Doing...</option>
                <option value={Categories.DONE}>Done!</option>
                {customCategories.map((customCategory) => (
                    <option key={customCategory.id} value={customCategory.title}>
                        {customCategory.title}
                    </option>
                ))}
            </select>
            <CreateToDo />
            <ul>
                {toDos?.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;