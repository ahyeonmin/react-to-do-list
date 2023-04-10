import { useForm } from "react-hook-form";

function ToDoList() {
    const { register, watch } = useForm();
    console.log(watch());
    return(
        <div>
            <form>
                <input {...register("email")} placeholder="Email"/>
                <input {...register("firstName")} placeholder="First Name"/>
                <input {...register("lastName")} placeholder="Last Name"/>
                <input {...register("phone")} placeholder="Phone"/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;