import './module.messeges.css';

function Messeges({ messageList }) {
  return (
    <ul className="messeges">
      {messageList ? messageList.map((el, index) => <li key={index} className="messeges__item"><p className="messeges__item-name">{el.author + " говорит:"}</p><p className="messeges__item-text">{el.text}</p></li>) : null}
    </ul>
  )
};

export default Messeges;