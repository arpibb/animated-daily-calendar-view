export const Button = ({ buttonCTA, onClick }) => {
  return (
    <button onClick={onClick} name={buttonCTA}>
      {buttonCTA}
    </button>
  )
}
