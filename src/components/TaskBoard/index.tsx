
import styles from './styles.module.css';
import clipboardImage from '../../assets/clipboard.svg';
import { NewTask } from '../NewTask';
import { Task } from '../Task';
import { FormEvent, useState } from 'react';

interface StatusProps {
  id: string;
  statusChange: boolean;
}

interface TaskProps {
  id: string;
  content: string;
  check: boolean;
}

export function TaskBoard() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const tasksChecked = tasks.filter((task) => task.check === true);

  function handleCreateTask(taskToCreate: string) {
    setTasks([
      ...tasks, 
      { id: String(tasks.length + 1), content: taskToCreate, check: false }
    ])
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    })

    setTasks(taskWithoutDeletedOne);
  }

  function handleChangeStatusTask({ id, statusChange }: StatusProps) {
    const taskWithStatusChange = [...tasks];
    const findIndex = tasks.findIndex((item) => item.id === id);
    taskWithStatusChange[findIndex].check = statusChange

    setTasks(taskWithStatusChange);
  }

  return (
    <div>
      <NewTask onCreate={handleCreateTask} />
      <div className={styles.taskBoardHeader}>
        <strong>
          Tarefas criadas <b>{tasks.length}</b>
        </strong>
        <strong>
          Concluídas{' '}
          {
            tasks.length === 0 ? (
              <b>0</b>
            ) : (
              <b>
                {tasksChecked.length} de {tasks.length}
              </b>
            )
          }
        </strong>
      </div>
      <ul className={styles.tasks}>
        { tasks.length === 0 ? (
          <div className={styles.taskBoardEmpty}>
            <img src={clipboardImage} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => {
            return (
              <li key={task.id}>
                <Task 
                  id={task.id}
                  task={task.content}
                  onDeleteTask={deleteTask}
                  onStatusChange={handleChangeStatusTask}
                />
              </li>
            )
          })
        ) }
      </ul>
    </div>
  );
}