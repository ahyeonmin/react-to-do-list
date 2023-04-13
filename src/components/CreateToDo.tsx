import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const category = useRecoilValue(categoryState);
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
            { text: toDo, id: Date.now(), category },
            ...oldToDos
        ]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input
                {...register("toDo", {
                    required: "Please write a to do."
                })}
                placeholder="새로운 할 일을 입력..."
            />
            <button>추가</button>
        </form>
    );
}

export default CreateToDo;