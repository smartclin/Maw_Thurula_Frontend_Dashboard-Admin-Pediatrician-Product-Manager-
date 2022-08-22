import useSettings from 'app/hooks/useSettings';
import {Image} from "react-bootstrap";

const MatxLogo = ({ className }) => {
    const { settings } = useSettings();
    const theme = settings.themes[settings.activeTheme];

    return (
        <div >
            <Image src={"https://i.postimg.cc/Tw0RHJFN/logo.png"} height={"60px"} width={"70px"}>

            </Image>
        </div>
    );
};

export default MatxLogo;
