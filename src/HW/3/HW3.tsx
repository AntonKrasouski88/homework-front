import { ChangeEvent, useState } from 'react';

export const HW3 = () => {
  // 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
  // что приложение начнет гореть красным и ругаться 😡
  // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
  // - прописать типизацию, где необходимо
  // - починить все, что горит красным
  // - дописать функциональность (где указано комментариями)
  // - приложение должно компилироваться и запускаться в браузере


  const [currentText, setCurrentText] = useState<string>('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newText = event.currentTarget.value
    setCurrentText(newText)
  };

  const handleSave = () => {
    setTexts([currentText, ...texts])
    setCurrentText('')
  };

  return (
    <div id={'hw03'}>
      {currentText ? (
        <h1 id={'hw03-text'}>ЗДЕСЬ ХОТЕЛОСЬ БЫ УВИДЕТЬ ВВОДИМЫЙ ТЕКСТ</h1>
        ) : (
        <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
      )}

      <input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />

      <button id={'hw03-button'} onClick={handleSave}>
        Сохранить
      </button>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => {
        return (
        <li key={index} id={`hw03-task-${index}`}>{el}</li>
        );})}
      </ol>
    </div>
  );
};