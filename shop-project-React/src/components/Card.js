import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();

  const handleClickCard = () => {
    console.log(props.id);
    console.log(props);
    navigate(`/detail/${props.id}`);
  };
  return (
    <>
      <div onClick={handleClickCard} style={{ cursor: 'pointer' }}>
        <img src={props.img} width="80%" alt={props.title} />
        <h6>{props.title}</h6>
        <p>{props.content}</p>
      </div>
    </>
  );
}

export default Card;
