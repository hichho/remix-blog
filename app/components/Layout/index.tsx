import { FC, ReactElement, createContext, useState } from "react";
import stylesUrl from "~/styles/index.css";
import ReactSwitch from 'react-switch';

export let links = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
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

const Layout: FC = (props): ReactElement => {
    const [theme, setTheme] = useState(initialize);
    return (
        <Theme.Provider value={theme}>
            <div className={theme}>
                <div className={'head'}>
                    <h2 className={'title'}>hichho's blog</h2>
                <ReactSwitch
                    checked={theme === 'light'}
                    onChange={(value) => {
                        console.log(value)
                        if (value) {
                            setTheme('light')
                        } else {
                            setTheme('dark')
                        }
                    }}
                    handleDiameter={28}
                    offColor="#141414"
                    offHandleColor="#282828"
                    onColor="#E6E6E6"
                    onHandleColor="#C8C8C8"
                    height={40}
                    width={70}
                    borderRadius={6}
                    activeBoxShadow="0px 0px 1px 2px #fffc35"
                    uncheckedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "orange",
                                paddingRight: 2
                            }}
                        >
                            👆
                        </div>
                    }
                    checkedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                color: "red",
                                fontSize: 18
                            }}
                        >
                            👆
                        </div>

                    }
                    uncheckedHandleIcon={
                        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
                            <circle r={3} cx={5} cy={5} />
                        </svg>
                    }
                    checkedHandleIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 20
                            }}
                        >
                            🌙
                        </div>
                    }
                    className="react-switch"
                    id="small-radius-switch"
                />
                </div>


                {props.children}
            </div>
        </Theme.Provider>
    )
}
export default Layout