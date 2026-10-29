import "./grid-item.css";

const GridItem = (props: any) => {
    const { navigateTo, imgSrc, title, category, icon, alt } = props;
    
    // Check if this is the edoc21 mobile image to apply special styling
    const isMobileFrame = imgSrc?.includes('edoc21-mobile') || imgSrc?.includes('propertier');
    
    // Handle both string and array categories for display
    const categoryDisplay = Array.isArray(category) 
        ? category.join(' | ').toUpperCase() 
        : category.toUpperCase();
    
    // Determine which icons to show based on categories
    const getIcons = () => {
        if (Array.isArray(category)) {
            return category.map((cat, index) => {
                let iconClass = '';
                if (cat === 'WEB') iconClass = 'fa-solid fa-globe';
                else if (cat === 'MOBILE') iconClass = 'fa-solid fa-mobile';
                else if (cat === 'GRAPHIC') iconClass = 'fa-solid fa-image';
                else if (cat === 'DESIGN') iconClass = 'fa-solid fa-pen-ruler';
                else if (cat === 'BRAND') iconClass = 'fa-solid fa-palette';
                
                return iconClass ? <i key={index} className={`multi-category-icon ${iconClass}`}></i> : null;
            });
        }
        return icon;
    };
    
    // Check if there are multiple categories
    const hasMultipleCategories = Array.isArray(category) && category.length > 1;
    
    // Keyboard navigation handler
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateTo();
        }
    };

    return (
        <div 
            className={`grid-item ${isMobileFrame ? 'grid-item-mobile-frame' : ''}`}
            onClick={navigateTo}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`View ${title} project details`}
        >
            <div className="card-wrapper">
                <div className="overlay">
                    <div className="onhover-text">
                        <span className="text-1">{title}</span>
                        <span className="text-2">{categoryDisplay}</span>
                    </div>
                    <div className={`onhover-icon onhover-icon-1 ${hasMultipleCategories ? 'multi-category-icons' : ''}`}>
                        {getIcons()}
                    </div>
                </div>
                <img className="card-image" src={imgSrc} alt={alt} />
            </div>
        </div>
    );
};

export default GridItem;
