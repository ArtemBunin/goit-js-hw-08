// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
//  В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';
// import { save, load, remove } from './localstorage';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(handleContactFormInput, 500));

formRef.addEventListener('submit', handleContactFormSubmit);

const formData = {};

function handleContactFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handleContactFormInput({ target }) {
  const { name, value } = target;
  formData[name] = value || '';
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

 
}
const savedInputLs =JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedInputLs) {
formRef.email.value=savedInputLs.email;
formRef.message.value=savedInputLs.message;
}



// fillMessageForm(formRef);

// function handleContactFormSubmit(event){
// event.preventDefault();
// remove(STORAGE_KEY);
// event.target.reset();
// }
//   function handleContactFormInput({target}){
// const{value,name}=target;

// const formDataFromLs = load(STORAGE_KEY) ||{};
// formDataFromLs[name]= value
// save(STORAGE_KEY,formDataFromLs)

//   }

//   function fillMessageForm(formRef){
//     const formDataFromLs = load(STORAGE_KEY) ||{};

//     if(!formDataFromLs){
//       return;
//     }
// const entries =Object.entries(formDataFromLs)
// entries.forEach(([key, value]) => {
//   formRef.elements[key].value = value;
//   console.log( formRef.elements[key]);

// });
//   }
