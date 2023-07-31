interface buttonProps {
  title: string;
  active: number;
  onClick: (IdKey: number) => void;
  IdKey: number;
}

export const NavigationButton = ({ title, active, onClick, IdKey}: buttonProps) => {
    
  const checkActive = active === IdKey ? "border-b-2 border-black" : null;

  return (
    <button
      className={`text-gray-400 p-1 ${checkActive} transition-all duration-100 ease-in `}
      onClick={() => onClick(IdKey)}
    >
      {title}
    </button>
  );
};