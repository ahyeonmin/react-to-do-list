import { useForm } from "react-hook-form";

function ToDoList() {
    const { register, watch, handleSubmit, formState } = useForm();
    const onValid = (data: any) => {
        console.log(data);
    };
    console.log(formState.errors);
    return(
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}>
                    <input {...register("email", { required: "Email is required.", minLength: { value: 10, message: "Your email is too short." } })} placeholder="Email"/>
                    <input {...register("firstName", { required: "First name is required." })} placeholder="First Name"/>
                    <input {...register("lastName", { required: "Last name is required." })} placeholder="Last Name"/>
                    <input {...register("phone")} placeholder="Phone"/>
                    <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;