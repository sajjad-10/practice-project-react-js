import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";

function App(props) {
    return (
        <div>
            <Layout>
                <p>Shopping APP</p>
                <Shopping />
            </Layout>
        </div>
    );
}

export default App;
