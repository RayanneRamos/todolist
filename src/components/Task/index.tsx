import styles from './styles.module.css';
import { ChangeEvent } from 'react';
import { Trash } from 'phosphor-react';

interface StatusProps {
  id: string;
  statusChange: boolean;
}

interface TaskProps {
  id: string;
  task: string;
  onDeleteTask: (taskId: string) => void;
  onStatusChange: ({ id, statusChange }: StatusProps) => void;
}

export function Task({ id, task, onDeleteTask, onStatusChange }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleStatusTask(event: ChangeEvent<HTMLInputElement>) {
    onStatusChange({ id, statusChange: event.target.checked });
  }
  
  return (
    <div className={styles.task}>
      <input id={id} type='checkbox' onChange={handleStatusTask} />
      <label htmlFor={id}>
        {task}
        <button onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </label>
    </div>
  )
}