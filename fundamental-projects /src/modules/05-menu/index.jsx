import React, {useState} from 'react';
import Title from "./components/Title.jsx";
import menuData from "./menu.js"
import MenuItem from "./components/MenuItem.jsx";
import './assets/index.css';


const allCategories = ['all', ...new Set(menuData.map((val) => val.category))]
const Menu = () => {
    const [menuItems, setMenuItems] = useState(menuData);
    const [category, setCategory] = useState(allCategories);
    return (
        <section className="menu">
            <Title text="Our menu" />
            <div style={{display: "flex", alignContent: "center", flexWrap: "wrap" }}>
                {
                    menuItems.map((item) => <MenuItem key={item.id}  {...item}/>)
                }
            </div>
        </section>
    );
};

export default Menu;