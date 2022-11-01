import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { HeaderBar, HeaderContainer, SliderMenu } from "../styles/UI";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  return (
    <HeaderContainer>
      <HeaderBar>
        <SliderMenu>
          <li onClick={() => signOut(auth)}>Sign Out</li>
          <li onClick={() => navigate("/adresar")}>Adresar</li>
          <li onClick={() => navigate("/kontakt")}>Contact</li>
          <li onClick={() => navigate("/adresar/omiljeni")}>Favorites</li>
        </SliderMenu>
      </HeaderBar>
    </HeaderContainer>
  );
};

export default Header;
