import styles from './styles.module.css';
import plusImage from '../../assets/plus.svg';

export function NewTask() {
  return (
    <div className={styles.container}>
      <form>
        <input 
        type='text' 
        placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>
          Criar
          <img src={plusImage} alt='plus' />
        </button>
      </form>
    </div>
  )
}