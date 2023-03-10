import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
    console.log(items)
    const [shownItems, setShownItems] = useState(items)

    const categories = new Set(items.map((item) => item.category));

    function handleMenuClicks(e) {
        const clickedCategory = e.target.dataset.category
        if (clickedCategory==='all') {
            setShownItems(items)
        } else {
            const filteredItems = items.filter((item)=> {
                return item.category === clickedCategory
            })
            setShownItems(filteredItems)
        }
    }

  return (
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
            handleClick={handleMenuClicks}
            categories={['all', ...categories]}
        />
        <Menu items={shownItems}/>
      </section>
  );
}

export default App;
