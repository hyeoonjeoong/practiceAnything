import React, { useState } from 'react';

const content = [
  {
    tab: 'Tab 1',
    content: 'Hi Tab 1',
  },
  {
    tab: 'Tab 2',
    content: 'Hi Tab 2',
  },
  {
    tab: 'Tab 3',
    content: 'Hi Tab 3',
  },
];

const useSelectTabs = (initialTabs, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabs);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const UseTabs = () => {
  const { currentItem, changeItem } = useSelectTabs(0, content);
  return (
    <>
      <div>
        {content.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
      </div>
      <div>{currentItem.content}</div>
    </>
  );
};

export default UseTabs;
