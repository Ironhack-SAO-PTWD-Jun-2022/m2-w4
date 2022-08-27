import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

const profileImg = 'https://i.imgur.com/i1gsj0v.png';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`HomePage ${theme}`}>
      <h1>Oi! Meu nome é...</h1>
      <img src={profileImg} className="profile" alt='profile' />
    </div>
  )
}

export default HomePage;