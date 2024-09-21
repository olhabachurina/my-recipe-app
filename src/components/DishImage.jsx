import React from 'react';

class DishImage extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: '2.4rem', color: '#a83232', marginBottom: '20px' }}>
          Готовое блюдо:
        </h2>
        <img
          src={process.env.PUBLIC_URL + '/images/борщ.jpg'}
          alt="Борщ"
          width="300"
          style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    );
  }
}

export default DishImage;