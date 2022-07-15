import { useState } from 'react';
import styles from './App.module.css';
import powerImage from './assets/powered.png';



const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const hadleCalculateButton = () => {
    if(heightField && weightField) {

    }else {
      alert("Digite todos os campos.")
    }
  }

 return(
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={powerImage} alt="" width={150}/>
      </div>
    </header>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcular o seu IMC.</h1>
        <p>IMC é uma sigla para indice de massa Corporea.</p>

        <input
        type="number"
        placeholder="Digite sua altura. Ex: 1.5 (em metros)"
        value={heightField > 0 ? heightField : ''}
        onChange={e => setHeightField(parseFloat(e.target.value))}
        />

        <input
        type="number"
        placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
        value={weightField > 0 ? weightField : ''}
        onChange={e => setWeightField(parseFloat(e.target.value))}
        />

        <button onClick={hadleCalculateButton}>Calcular</button>
      </div>
      <div className={styles.rightSide}>

      </div>
    </div>
  </div>

 );
}
export default App;