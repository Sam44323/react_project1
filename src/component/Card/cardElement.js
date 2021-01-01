import './cardElement.css';

const CardElement = (props) => {
  return (
    <article className='element_container'>
      <img src={props.imageUrl} alt={props.name} className='card-image' />
      <span className='grouping_class'>
        <h3 className='name_class'>{props.name}</h3>
        <p className='age'>{props.age} years old</p>
        <div className='hover-text'>
          {props.name}
          <hr />
          {props.age}
        </div>
      </span>
      <hr />
    </article>
  );
};

export default CardElement;
