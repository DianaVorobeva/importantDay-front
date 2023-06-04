import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';


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
        formState: { errors, isValid },
      } = useForm({
        mode:"onBlur"
      });

    let formData = document.forms.communication;
    let xhr = new XMLHttpRequest();

function goSendIt() {
  if (formData.user.value && formData.tel.value) {
    let obj = {
        user: formData.user.value,
        tel: formData.tel.value
    }
    let str = JSON.stringify(obj);
    xhr.open("POST", "/message/");
    xhr.send(str);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
  } else {
    alert("Не заполнена")
  }
  reset();
}
    
    // const onSubmit = (data) => {
    //   console.log(JSON.stringify(data));
    //   reset();
    // }


    return (
        <div className="modalForm">
            <div className="modal__title">
                Оставьте заявку 
            </div>
            <div class="modal__description">
                Наш эксперт развлечений ответит на&nbsp;все ваши вопросы. 
            </div>
            <form method="post" name="communication" className="gray-form vertical-form">
                <label className="input">
                    <span className="input__label menu-18 gray-form" >Имя</span>
                    <input
                    {...register('user', { 
                        required: "*Поле обязательно к заполнению",
                        minLength: {
                            value:2,
                            message: "Минимум 2 символа"
                        }
                     })}
                     type="text" 
                     name="user" 
                     placeholder="Как вас зовут?" 
                     data-label="Имя пользователя" 
                     className="input-text"/>
                </label>
                <div style={{height:40}}>
                    {errors?.user && <p className="errors"> {errors?.user.message || "Error!"}</p>}
                </div>
                <label className="input">
                    <span className="input__label menu-18 gray-form">Телефон*</span>
                    <InputMask 
                    {...register('tel', { 
                        required: "*Поле обязательно к заполнению"
                     })}
                    type="tel" 
                    name="tel" 
                    placeholder="Введите телефон*" 
                    data-label="Телефон"  
                    data-req="true" 
                    className="input-text" 
                    mask="+7 999 999 99 99">
    </InputMask>
    
                </label>
                <div style={{height:40}}>
                    {errors?.tel && <p className="errors"> {errors?.tel.message || "Error!"}</p>}
                </div>
                <button onSubmit={handleSubmit(goSendIt)} onclick={goSendIt()} className="btnCTA center" type="submit" disabled={!isValid}>Отправить</button>
            </form>
        </div>
    )
}

export default FormFeedback;