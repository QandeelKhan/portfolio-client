import "./page-template.css";
const PageTemplate = (props: any) => {
    return (
        <div className="about-container">
            <div className="main-about-area">
                <div className="about-head-logo-area">
                    <h1 className="aboutme-heading">{props.pageName}</h1>
                    {props.iconComponent}
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default PageTemplate;
