import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../Button";

const ButtonFalarEspecialista = ({ secondary = false, className = '' }) => {
  const navigate = useNavigate();

  return (
    <Button secondary={secondary} className={`flex justify-center items-center gap-2 w-fit ${className}`} onClick={() => navigate('/contato')}>
      <span>Falar com especialista</span>
      <ArrowRightIcon aria-hidden="true" className="size-4" />
    </Button>
  )
}

export default ButtonFalarEspecialista;
