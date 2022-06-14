import { useNavigate, LoaderFunction, useLoaderData, Link } from "remix";
import stylesUrl from "../styles/index.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import * as OnePost from "~/routes/blog/one-post.mdx";

function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}

export const loader: LoaderFunction = () => {
    return [
        postFromModule(OnePost)
        // postFromModule(firstPost),
        // postFromModule(secondPost),
        // postFromModule(thirdPost),
    ];
};

export let links = () => {
    return [{ rel: "stylesheet", href: stylesUrl }]
};


const initialize = () => {
    const current = new Date();
    if (current.getHours() >= 18 || current.getHours() < 8) {
        return 'dark'
    } else {
        return 'light'
    }
}
export const Theme = createContext(initialize());
export default function Index() {
    const [theme, setTheme] = useState(initialize);
    const navigate = useNavigate();
    const posts = useLoaderData();
    const goBlog = () => {
        console.log(123)
        // navigate('/blog')
    };
    return (
        <Theme.Provider value={theme}>
            <div className={theme}>
                <div className={'head'}>
                    <span className={'title'}>hichho</span>
                    {/*<ReactSwitch*/}
                    {/*    checked={theme === 'light'}*/}
                    {/*    onChange={(value) => {*/}
                    {/*        console.log(value)*/}
                    {/*        if (value) {*/}
                    {/*            setTheme('light')*/}
                    {/*        } else {*/}
                    {/*            setTheme('dark')*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    handleDiameter={28}*/}
                    {/*    offColor="#141414"*/}
                    {/*    offHandleColor="#282828"*/}
                    {/*    onColor="#E6E6E6"*/}
                    {/*    onHandleColor="#C8C8C8"*/}
                    {/*    height={40}*/}
                    {/*    width={70}*/}
                    {/*    borderRadius={6}*/}
                    {/*    activeBoxShadow="0px 0px 1px 2px #fffc35"*/}
                    {/*    uncheckedIcon={*/}
                    {/*        <div*/}
                    {/*            style={{*/}
                    {/*                display: "flex",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                alignItems: "center",*/}
                    {/*                height: "100%",*/}
                    {/*                fontSize: 15,*/}
                    {/*                color: "orange",*/}
                    {/*                paddingRight: 2*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            🦉*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*    checkedIcon={*/}
                    {/*        <div*/}
                    {/*            style={{*/}
                    {/*                display: "flex",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                alignItems: "center",*/}
                    {/*                height: "100%",*/}
                    {/*                color: "red",*/}
                    {/*                fontSize: 18*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            🏝*/}
                    {/*        </div>*/}

                    {/*    }*/}
                    {/*    uncheckedHandleIcon={*/}
                    {/*        <div*/}
                    {/*            style={{*/}
                    {/*                display: "flex",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                alignItems: "center",*/}
                    {/*                height: "100%",*/}
                    {/*                fontSize: 20*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            🌙*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*    checkedHandleIcon={*/}
                    {/*        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">*/}
                    {/*            <circle r={3} cx={5} cy={5}/>*/}
                    {/*        </svg>*/}
                    {/*    }*/}
                    {/*    className="react-switch"*/}
                    {/*    id="small-radius-switch"*/}
                    {/*/>*/}
                </div>
                <div className={'introduce'}>
                    <img src={'./avatar.jpg'} alt={''} className={'avatar'} />
                    <div className={'introduce-text'}>
                        <span>Personal Blog by hichho</span>
                    </div>
                </div>
                {/* <ul>
                    {posts.map((post: any) => (
                        <li key={post.slug}>
                            <Link to={post.slug}>
                                    {post.title}
                            </Link>
                            {post.description ? (
                                <p className="m-0 lg:m-0">{post.description}</p>
                            ) : null}
                        </li>
                    ))}
                </ul> */}
            </div>
        </Theme.Provider>
    );
}
