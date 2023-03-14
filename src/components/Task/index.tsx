import styles from './styles.module.css';
import trash from '../../assets/trash.svg';

export function Task() {
  return (
    <div className={styles.task}>
      <input type='checkbox' />
      <label>
        Ir a academia
        <button>
          <img src={trash} alt='Delete' />
        </button>
      </label>
    </div>
  )
}