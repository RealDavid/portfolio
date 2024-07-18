import rabbit from '../rabbit.png';
import cat from '../Folder3/cat.png';
import bird from '../../Folder1/Folder2/bird.png';
import fish from '../../Folder1/fish.png';
import dog from '../../dog.png';

function App() {
  return (
    <>
      <h1>All the Animals</h1>
      <h2>Rabbit:</h2>
      <img src={rabbit} alt="" />
      <h2>Cat:</h2>
      <img src={cat} alt="" />
      <h2>Dog:</h2>
      <img src={dog} alt="" />
      <h2>Fish:</h2>
      <img src={fish} alt="" />
      <h2>Bird:</h2>
      <img src={bird} alt="" />

    </>
  )
}

export default App
