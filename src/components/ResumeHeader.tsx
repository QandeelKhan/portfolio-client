const ResumeHeader = (props: any) => {
    return (
        <section id="about-section">
            <div className="about-container">
                <div className="main-about-area">
                    <div className="about-head-logo-area">
                        <h1 className="aboutme-heading">{props.pageName}</h1>
                        {props.iconComponent}
                    </div>
                    <div>{props.children}</div>
                </div>
            </div>
        </section>
    );
};

export default ResumeHeader;
