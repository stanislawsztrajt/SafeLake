import { useNavigate } from 'react-router-dom';

const useBackButton = () => {
  const navigate = useNavigate();

  const getToPreviousLocation = () => {
    navigate(-1);
  }

  return {
    getToPreviousLocation
  }
}

export default useBackButton;