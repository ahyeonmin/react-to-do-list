import { useForm } from "react-hook-form";

interface IForm {
    toDo: string;
}

function ToDoList() {
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onValid = (data: IForm) => {
        console.log('add to do', data.toDo);
        setValue("toDo", "");
    };
    return(
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("toDo",
                        {required: "Please write a to do."})}
                    placeholder="Write a to do..."
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;