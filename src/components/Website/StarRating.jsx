export const StarRating = (props)=> {
    return (

<div>
  {[...Array(5).keys()].map((index) => {
    const star = index+1; // stars will be 1, 2, 3, 4, 5
    return (  
      <span
        key={index}
        className='star'
        style={{
          cursor: 'pointer',
          color: star <= props.value ? 'gold' : '#D8DAE4',
          fontSize: '18px',
        }}
      >
        ★
      </span>
    )
  })}
</div>
)
}
    
   