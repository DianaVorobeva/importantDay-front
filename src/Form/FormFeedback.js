import { withHookFormMask } from 'use-mask-input';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';



function FormFeedback() {

    const BUTTON_WRAPPER_STYLES = {
        position: 'relative',
        zIndex: 1
      }
      
      const OTHER_CONTENT_STYLES = {
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'red',
        padding: '10px'
      }

      
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode:"onBlur"
      });

      const [userName, setUserName] = useState('');
      const [userTel, setUserTel] = useState('');
      const [showSuccess, setShowSuccess] = useState(false);

      const sendMessage =  (e) => {
        e.preventDefault();
      let userData = {
        userName: userName,
        userTel: userTel
      }
   
        axios.post('https://importantdaybackend.onrender.com/send-notification', {userData})
        .then((data) => {
            console.log(data)
            if(data.status===200) {
                setShowSuccess(!showSuccess)
                console.log(showSuccess)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Что-то пошло не так...',
                    text: 'Пожалуйста, попробуйте познее...',
                  })
            }
        })
    
    }
    


    return (
        <div className="modalForm">
        {showSuccess
        ?
        <div>
           <div className="modal__title">
                Спасибо, что выбрали нас!
            </div>
            <div>
            <div className="heart"></div>
            </div>
            <div className="modal__description">
                Скоро наш эксперт развлечений ответит на&nbsp;все ваши вопросы. 
            </div>
        </div>
        :
            <div>

            <div className="modal__title">
                Оставьте заявку 
            </div>
            
            <div className="modal__description">
                Наш эксперт развлечений ответит на&nbsp;все ваши вопросы. 
            </div>
            <form className="gray-form vertical-form">
                <label className="input">
                    <label className="input__label menu-18 gray-form" >Имя</label>
                    <input 
                    {...register('userName', { 
                        required: "*Поле обязательно к заполнению",
                        minLength: {
                            value:2,
                            message: "Минимум 2 символа"
                        }
                     })}
                     type="text" 
          
                     id="userName"
                     name="userName"
                     value={userName}
                     onChange = {(e) => setUserName(e.target.value)}
                     placeholder="Как вас зовут?" 
                     data-label="Имя пользователя" 
                     className="input-text"
                     />
                </label>
                <div style={{height:40}}>
                    {errors?.user && <p className="errors"> {errors?.user.message || "Error!"}</p>}
                </div>
                <label className="input">
                    <label className="input__label menu-18 gray-form">Телефон*</label>
                    <input 
                    {...register('tel', { 
                        required: "*Поле обязательно к заполнению",
                        minLength: {
                            value:10,
                            message: "Минимум 10 символа"
                        }
                     })}
                    type="tel" 
                    name="userTel" 
                    id="userTel"
                    value={userTel}
                    onChange = {(e) => setUserTel(e.target.value)}
                    placeholder="Введите телефон*" 
                    data-label="Телефон"  
                    data-req="true" 
                    className="input-text" 
                    mask="+7 999 999 99 99">
                  </input>
                    
    
                </label>
                <div style={{height:40}}>
                    {errors?.tel && <p className="errors"> {errors?.tel.message || "Error!"}</p>}
                </div>
                <button onClick={sendMessage} className="btnCTA center"  type="button" disabled={userName==="" || userTel===""} >Отправить</button>
            </form>
            </div>
        
            
   }
      
        </div>
    )
}

export default FormFeedback;