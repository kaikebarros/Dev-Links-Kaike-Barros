import "./Button.css";
function Button({
  texto,
  icone,
onClick
}) {


  return (
    <div>
      <button className="button"onClick={onClick} >
        <span className="icone">{icone}</span>
        <span>{texto}</span>
      </button>

   
    </div>
  );
}

export default Button;
