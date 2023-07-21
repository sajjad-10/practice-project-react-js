const Layout = (props) => {
    return (
        <>
            <div>
                <header>header</header>
                <main>{props.children}</main>
                <footer>footer</footer>
            </div>
        </>
    );
};

export default Layout;
