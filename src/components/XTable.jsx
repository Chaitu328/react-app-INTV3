import React, { useState } from "react";

function Table() {
    const [data, setData] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" },
    ]);

    // Sort by Date
    const sortByDate = () => {
        const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
        setData(sortedData);
    };

    // Sort by Views
    const sortByViews = () => {
        const sortedData = [...data].sort((a, b) => a.views - b.views);
        setData(sortedData);
    };

    return (
        <>
            <h1>Date and Views Table</h1>
            <div>
                <button onClick={sortByDate}>Sort by Date</button>
                <button onClick={sortByViews}>Sort by Views</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.views}</td>
                            <td>{item.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;
