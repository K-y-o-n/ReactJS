import './module.messege.css';

function Messege({ messageList }) {
  return (
    <ul className="messeges">
      {messageList ? messageList.map((el) => <li className="messeges__item"><p className="messeges__item-name">{el.author + " говорит:"}</p><p className="messeges__item-text">{el.text}</p></li>) : null}
    </ul>
  )
};

export default Messege;