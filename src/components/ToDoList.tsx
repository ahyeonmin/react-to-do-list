import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from "recoil";
import { Categories, categoryState, customCategoryState, toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
    const Container = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 4%;
    `;
    const Border = styled.div`
        background-color: ${(prop) => prop.theme.bgColor};
        width: 27%;
        height: 100%;
        border: 1px solid gray;
        padding-bottom: 32%;
    `;
    const Title = styled.div`
        background-color: #ECECEC;
        padding: 5px;
        border-bottom: 1px solid gray;
        font-size: 12px;
    `;
    const Content = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    const Category = styled.div`
        display: flex;
        padding: 20px 0;
    `;
    const ToDoList = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ul {
            margin-top: 20px;
        }
    `;

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
        <Container>
            <Border>
                <Title>📎 할 일 목록</Title>
                <Content>
                    <Category>
                        <select value={category} onInput={onInput}>
                            <option value={Categories.TO_DO}> 할 일 </option>
                            <option value={Categories.DOING}> 진행 중 </option>
                            <option value={Categories.DONE}> 완료 </option>
                            {customCategories.map((customCategory) => (
                                <option key={customCategory.id} value={customCategory.title}>
                                    {customCategory.title}
                                </option>
                            ))}
                        </select>
                        <CreateCategory />
                    </Category>
                    <ToDoList>
                        <CreateToDo />
                        <ul>
                            {toDos?.map((toDo) => (
                                <ToDo key={toDo.id} {...toDo} />
                            ))}
                        </ul>
                    </ToDoList>
                </Content>
            </Border>
        </Container>
    );
}

export default ToDoList;