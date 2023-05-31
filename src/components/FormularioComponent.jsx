/* eslint-disable react/prop-types */
import { InputComponent } from './InputComponent';
import  '../styles/form.css'

export const FormularioComponent = ({
  handleSubmit,
  setFavAnimal,
  setName,
  setTypePet,
  setFanDogs
}) => {
  return (
    <div className='form-container'>
      <h1>Encuesta MascotApp</h1>
      <form className='form'>
        <InputComponent
          title={'¿ Cual es tu animal favorito ?'}
          onChangeHandler={setFavAnimal}
          type={'text'}
        />
        <InputComponent
          title={'¿ Cual es el nombre de tu primera mascota ?'}
          onChangeHandler={setName}
          type={'text'}
        />
        <InputComponent
          title={'¿ Que animal fue tu ultima mascota ?'}
          onChangeHandler={setTypePet}
          type={'text'}
        />
        <InputComponent
          title={'¿ Eres fan de los perros ?'}
          onChangeHandler={setFanDogs}
          type={'checkbox'}
        />
        <button  type='submit' onClick={ handleSubmit }>Send Pet Form</button>
      </form>
    </div>
  );
};
