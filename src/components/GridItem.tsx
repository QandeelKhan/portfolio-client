import "../pages/portfolio-detail.css";
import "../pages/portfolio.css";

const GridItem = (props: any) => {
    const { onClick, imgSrc, title, category, icon, alt } = props;

    return (
        <div className="grid-item">
            <div className="card-wrapper">
                <div onClick={onClick} className="overlay">
                    <div className="onhover-text">
                        <span className="text-1">{title}</span>
                        <span className="text-2">{category.toUpperCase()}</span>
                    </div>
                    <div className="onhover-icon onhover-icon-1 ">{icon}</div>
                </div>
                <img className="card-image" src={imgSrc} alt={alt} />
            </div>
        </div>
    );
};

export default GridItem;
