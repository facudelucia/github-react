import iconSun from '../../../assets/desktop/icon-sun.svg';
import iconMoon from '../../../assets/desktop/icon-moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Icon, SwitchButton } from './ThemeSwitch.css';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const { darkThemeEnabled } = useSelector(store => store);

  const handleChangeThemeClick = () => dispatch({
    type: "TOGGLE_DARKTHEME"
  });

  return (
    <Wrapper>
      <Icon src={iconSun} alt="Sun Icon" />
      <SwitchButton
        themeDark={darkThemeEnabled}
        onClick={handleChangeThemeClick}
        aria-label="Theme Switch Button"
      />
      <Icon src={iconMoon} alt="Moon Icon" />
    </Wrapper>
  );
};

export default ThemeSwitch;