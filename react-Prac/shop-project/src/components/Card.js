function Card(props) {
  return (
    <>
      <img src={props.img} width="80%" alt={props.title} />
      <h6>{props.title}</h6>
      <p>{props.content}</p>
    </>
  );
}

export default Card;
