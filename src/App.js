import React, { useState } from 'react';


const App = () => {
    return (
        <section className="container">
            <h1 className="container__header">Todolist</h1>

            <div className="search-container">
                <input class="search-input" type="text" placeholder="task name eg: buy milk"/>
                <button class="search-btn">add task</button>
            </div>

            <button class="delete-all-btn">delete all tasks</button>

            <div className="list-container">
                <ul className="list">
                    <li className="list__item">
                        <h2 className="item__title">item 1</h2>
                        <button className="item-delete-btn">&times;</button>
                    </li>

                    <li className="list__item">
                        <h2 className="item__title">item 2</h2>
                        <button className="item-delete-btn">&times;</button>
                    </li>

                    <li className="list__item">
                        <h2 className="item__title">item 3</h2>
                        <button className="item-delete-btn">&times;</button>
                    </li>

                </ul>
            </div>
        </section>
    )
}


export default App;