import "../Form/Form.scss"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "../../Header/Form/Form.scss";

function Form({data, setData, modalActive, setModalActive}) {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => setData(data);

  useEffect(() => {
    localStorage.setItem("Appointments", JSON.stringify(data)) ||
    setModalActive({...modalActive, modal1: false})
    
  }, [data])

  

  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Appointment</h3>
      <label>Your details</label>
      <input type="text" placeholder="First name" {...register("Name", {required: true, maxLength: 80})} />
        

      <input type="tel" placeholder="Mobile number" {...register("Number", {required: true, minLength: 9, maxLength: 12})} />
        

      <label>Service</label>
      <select {...register("Service", { required: true })}>
        <option value="Hair Cut">Hair Cut</option>
        <option value="Beard Cut">Beard Cut</option>
        <option value="Facial Pack">Facial Pack</option>
      </select>
        

      <label>Date and time</label>
      <input type="date" placeholder="Visit date" {...register("Date", {required: true })} />
      
      <select {...register("Time", {required: true })}>
        <option value="12:30">12:30</option>
        <option value="13:30">13:30</option>
        <option value="14:30">14:30</option>
        <option value="15:30">15:30</option>
        <option value="16:30">16:30</option>
        <option value="17:30">17:30</option>
        <option value="18:30">18:30</option>
      </select>

      <input type="submit" value="sing up"/>
    </form>
  );
}


export default Form