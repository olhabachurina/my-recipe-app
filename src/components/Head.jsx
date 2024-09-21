import React from 'react';

class Head extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ fontFamily: "'Georgia', serif", fontSize: '3rem', color: '#a83232', marginBottom: '10px' }}>
          Рецепт: Украинский борщ по-одесски
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#555', marginTop: '10px' }}>
          Готовим борщ так, чтобы даже теща просила добавки!
        </p>
      </div>
    );
  }
}

export default Head;