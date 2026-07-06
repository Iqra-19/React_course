export default function ExpenseItem( {item, onDelete} ) {

    const date = new Date(item.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
})

    // Helper to get category for fallback/rendering
    const getCategory = (item) => {
        if (item.category) return item.category;
        const titleLower = (item.title || "").toLowerCase();
        if (titleLower.includes('lunch') || titleLower.includes('food') || titleLower.includes('dinner') || titleLower.includes('eat') || titleLower.includes('cafe') || titleLower.includes('restaurant')) return 'Food';
        if (titleLower.includes('travel') || titleLower.includes('cab') || titleLower.includes('taxi') || titleLower.includes('fare') || titleLower.includes('bus') || titleLower.includes('auto') || titleLower.includes('petrol') || titleLower.includes('fuel')) return 'Travel';
        if (titleLower.includes('shop') || titleLower.includes('notebook') || titleLower.includes('book') || titleLower.includes('dress') || titleLower.includes('cloth') || titleLower.includes('shirt')) return 'Shopping';
        return 'Food'; // default fallback to match screenshot
    }

    const category = getCategory(item);
    const categoryClass = `category-badge ${category.toLowerCase()}`;

    return (
    <div className="expense-item">
        
        <div className="expense-details">
            <div className="expense-title-row">
                <span className="expense-title">{item.title}</span>
                <span className={categoryClass}>{category}</span>
            </div>
            <span className="expense-date">{date}</span>
        </div>

        <div className="expense-actions">
            <span className="expense-amount">₹{item.amount}</span>
            <button className="edit-btn" type="button">
                <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Edit
            </button>
            <button className="delete-btn" onClick={ () => onDelete(item.id) } type="button">
                <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Delete
            </button>
        </div>
    </div>
  )
}

