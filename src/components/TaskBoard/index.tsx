
import styles from './styles.module.css';
import clipboardImage from '../../assets/clipboard.svg';

export function TaskBoard() {
  return (
    <div>
      <div className={styles.taskBoardHeader}>
        <strong>
          Tarefas criadas <b>0</b>
        </strong>
        <strong>
          Concluídas <b>0</b>
        </strong>
      </div>
      <ul className={styles.tasks}>
        <div className={styles.taskBoardEmpty}>
          <img src={clipboardImage} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </ul>
    </div>
  );
}