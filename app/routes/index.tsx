import { LinksFunction, useNavigate } from "remix";
import stylesUrl from "../styles/index.css";
export let links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};
export default function Index(props: any) {
    const navigate = useNavigate();
    setTimeout(() => {
        goBlog()
    }, 4000)
    const goBlog = () => navigate('/blog');
    return (
        <span onClick={goBlog}>Hichho's Blog</span>
    );
}
