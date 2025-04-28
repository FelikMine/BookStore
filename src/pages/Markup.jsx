import Header from "../components/Header"
import "../styles/Markup.css"

export default function Markup ({ children }) {


    return (
        <div id="wrapper">
            <Header />
            <main>{children}</main>
        </div>
    )
}