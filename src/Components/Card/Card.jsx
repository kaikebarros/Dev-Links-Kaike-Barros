import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../Button/Button";
import "./Card.css";
  const AbrirGithub = () => {
    window.open("https://github.com/kaikebarros", "_blank");
  };

  const AbrirLinkedIn = () => {
     window.open("https://www.linkedin.com/in/kaike-barros", "_blank");
   };
   const AbrirPortifolio = () => {
     window.open("https://portif-lio-kaikebarros.vercel.app/","_blank");
   };
   const AbrirInstagram = () => {
     window.open("https://www.instagram.com/kaikebarross?igsh=bDBjODhrazJmbDdm","_blank");
   };

function Card() {
  

  return (
    <div className="card">
      <Button icone={<FaGithub />} texto={"GitHub"} onClick={AbrirGithub}/>
      <Button icone={<FaLinkedin />} texto={"LinkedIn"} onClick={AbrirLinkedIn}/>
      <Button icone={<FaGlobe />} texto={"Portifólio"} onClick={AbrirPortifolio}/>
      <Button icone={<FaInstagram />} texto={"Instagram"} onClick={AbrirInstagram}/>
    </div>
  );
}

export default Card;
