import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    password: string;
    checkPassword: string;
    firstName: string;
    lastName: string;
    phone: number;
}

function ToDoList() {
    const { register, watch, handleSubmit, formState: { errors }} = useForm<IForm>({
        defaultValues: { email: "@naver.com" }
    });
    const onValid = (data: any) => {
        console.log(data);
    };
    return(
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}>
                    <input
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                                message: "Only naver.com emails allowed."
                            }
                        })}
                        placeholder="Email"
                    />
                    <span>{errors?.email?.message}</span>
                    <input
                        {...register("password", {
                            required: "Password is required.",
                            minLength: {
                                value: 8,
                                message: "Password have to be at least 8 digits."
                            }
                        })}
                        placeholder="Password"
                    />
                    <span>{errors?.password?.message}</span>
                    <input
                        {...register("checkPassword", {
                            required: "Please Check Password.",
                            minLength: {
                                value: 8,
                                message: "Password have to be at least 8 digits."
                            }
                        })}
                        placeholder="Check Password"
                    />
                    <span>{errors?.checkPassword?.message}</span>
                    <input {...register("firstName", { required: "First name is required." })} placeholder="First Name"/>
                    <span>{errors?.firstName?.message}</span>
                    <input {...register("lastName", { required: "Last name is required." })} placeholder="Last Name"/>
                    <span>{errors?.lastName?.message}</span>
                    <input {...register("phone")} placeholder="Phone"/>
                    <span>{errors?.phone?.message}</span>
                    <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;