import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";

const App = () => {
    return (
        <div>
            <Router>
                <Layout>
                    <Routes>
                        <Route
                            path="/checkout"
                            element={() => <h2>Checkout Page</h2>}
                        />
                        <Route path="/" exact element={<Shopping />} />
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
};

export default App;
