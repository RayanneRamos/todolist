import styles from './styles.module.css';
import logoToDo from '../../assets/logo.svg';

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logoToDo} alt='Logo ToDoList' />
    </div>
  )
}