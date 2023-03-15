import styles from './styles.module.css';
import plusImage from '../../assets/plus.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface CreateTask {
  onCreate: (task: string) => void;
}

export function NewTask({ onCreate }: CreateTask) {
  const [ newTask, setNewTask ] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreate(newTask);
    setNewTask('');
  }

  function handleNewStatusChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewStatusInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Precisa adicionar uma tarefa');
  }
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateNewTask}>
        <input 
        type='text' 
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={handleNewStatusChange}
        onInvalid={handleNewStatusInvalid}
        />
        <button type='submit'>
          Criar
          <img src={plusImage} alt='plus' />
        </button>
      </form>
    </div>
  )
}