import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, id, category }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name }
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };
    const onDelete = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((oldToDos) => oldToDos.id === id);
            return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={changeCategory}>Doing</button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={changeCategory}>To Do</button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={changeCategory}>Done</button>
            )}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

export default ToDo;