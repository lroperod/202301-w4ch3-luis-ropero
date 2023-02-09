import { FC } from "react";
import "./TaskCreator.css";
interface TaskCreatorProps {
  functionOnSubmit: (value: string) => void;
}

const TaskCreator: FC<TaskCreatorProps> = ({ functionOnSubmit }) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const inputValue = e.currentTarget.taskList.value;
    functionOnSubmit(inputValue);
  };
  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input
        className="todo-form_input"
        type="text"
        name="taskList"
        placeholder="New To Do"
      />
      <button className="todo-form_button" type="submit">
        Add new task
      </button>
    </form>
  );
};

export default TaskCreator;
