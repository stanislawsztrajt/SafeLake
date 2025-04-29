import { useNavigate } from 'react-router-dom';

interface Props {
  customLocation?: string
}

const useBackButton = (props:Props) => {
  const { customLocation } = props
  const navigate = useNavigate();

  const getToPreviousLocation = () => {
    customLocation ? navigate(customLocation) : navigate(-1)
  }

  return {
    getToPreviousLocation
  }
}

export default useBackButton;