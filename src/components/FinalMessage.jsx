import React from 'react';

class FinalMessage extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.6rem', color: '#555' }}>
        <p><strong>Приятного аппетита!</strong></p>
        <p>Как говорят в Одессе: <em>"Если борщ удался, то жизнь удалась!"</em></p>
      </div>
    );
  }
}

export default FinalMessage;