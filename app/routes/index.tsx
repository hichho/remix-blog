import {useLocation} from "react-router";
import {useNavigate} from "remix";

export default function Index(props: any) {

    const navigate =  useNavigate();

    setTimeout(() => {
        // navigate('/blog')
    }, 1000)

    const handleClick = () => {
    }

    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1 onClick={handleClick}>My Blog</h1>
        </div>
    );
}
