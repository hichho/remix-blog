import { useNavigate} from "remix";
import Layout from "~/components/Layout";
import stylesUrl from "../styles/index.css";
import font from 'Montserrat-Black.ttf'

export let links = () => {
    return [{rel: "stylesheet", href: stylesUrl},
        {rel: "stylesheet", href: font}];
};

export default function Index() {
    const navigate = useNavigate();
    const goBlog = () => {
        console.log(123)
        // navigate('/blog')
    };
    return (
        <Layout>
        </Layout>

    );
}
