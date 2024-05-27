import './Card.css';

const Card = (props) => {
   console.log("prabu",props);

  return (
    <div className="card">
      <p className='title'>FREE</p>
      <h1 className='header'>${props.data.price}/month</h1>
      {
        props.data.features.map((feature, index) => (
          <p key={index}>{"✔"}{feature}</p>
        ))
      }
      
        <button className='btn btn-primary'>Button</button>
      </div>
  )
}

export default Card;