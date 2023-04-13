import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { customCategoryState } from "../atoms";

interface IForm {
    customCategory: string;
}

function CreateCategory() {
    const setCustomCategory = useSetRecoilState(customCategoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onValid = ({ customCategory }: IForm) => {
        setCustomCategory((prev) => [{title: customCategory, id: Date.now()}, ...prev]);
        setValue("customCategory", "");
    };
    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input
                {...register("customCategory")}
                placeholder="새로운 카테고리를 추가..."
            />
            <button>추가</button>
        </form>
    );
}

export default CreateCategory;
