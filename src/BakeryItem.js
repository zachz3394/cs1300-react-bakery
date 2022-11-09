const BakeryItem = (props) => {
  const { name, description, price, image } = props.item;

  return (
    <div style={{display: 'inline-block', width: '400px', height: '400px'}}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={props.callback} style={{display: 'block', marginBottom: '12px'}}> Add to Cart </button>
      <img src={image} aria-label={`image of ${name}`} style={{maxWidth: '200px', maxHeight: '200px'}}/>
    </div>
  )
}

export default BakeryItem;