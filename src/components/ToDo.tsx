import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, id, category }: IToDo) {
    const List = styled.li`
        padding-bottom: 10px;
        span {
            padding-right: 5px;
            font-size: 13px;
        }
    `;

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
        <List>
            <span> {text} </span>
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={changeCategory}>진행 중</button>
            )}
            {category !== Categories.TO_DO && (
                <button name={Categories.TO_DO} onClick={changeCategory}>할 일</button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={changeCategory}>완료</button>
            )}
            <button onClick={onDelete}>삭제</button>
        </List>
    );
}

export default ToDo;