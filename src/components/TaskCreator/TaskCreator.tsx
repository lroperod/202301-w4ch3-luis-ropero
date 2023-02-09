import { FC } from "react";

interface TaskCreatorProps {
  functionOnSubmit: (value: string) => void;
}

const TaskCreator: FC<TaskCreatorProps> = ({ functionOnSubmit }) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.taskList.value;
    functionOnSubmit(inputValue);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="taskList" />
      <button type="submit">Add new task</button>
    </form>
  );
};

export default TaskCreator;
