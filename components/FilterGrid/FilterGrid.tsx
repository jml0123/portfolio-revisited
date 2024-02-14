import React, { useState } from 'react';
import styles from '../../styles/scss/FilterGrid.module.scss';
import { GridItemData } from '../Grid/Grid.types';
import { Grid } from '../Grid/Grid'; // Import your existing Grid and GridItem components
import { priorityTechList } from '../../data/projects.data';

interface FilterableGridProps {
  items: GridItemData[];
}

const FilterableGrid: React.FC<FilterableGridProps> = ({ items }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filterWords: string[] = Array.from(new Set(items.flatMap((d) => d.tech)))
  .sort((a, b) => {
    const priorityA = priorityTechList.indexOf(a);
    const priorityB = priorityTechList.indexOf(b);

    // If both words are in the priority list, sort based on their order in the list
    if (priorityA !== -1 && priorityB !== -1) {
      return priorityA - priorityB;
    }

    // If only one word is in the priority list, prioritize it over the other
    if (priorityA !== -1) {
      return -1;
    }
    if (priorityB !== -1) {
      return 1;
    }

    // If neither word is in the priority list, maintain their original order
    return 0;
  });


  const handleFilterClick = (word: string) => {
    setActiveFilters((prevFilters) => {
      if (prevFilters.includes(word)) {
        // Remove the filter if it's already active
        return prevFilters.filter((filter) => filter !== word);
      } else {
        // Add the filter if it's not active
        return [...prevFilters, word];
      }
    });
  };

  const filteredItems = activeFilters.length
    ? items.filter((item) => activeFilters.every((filter) => item.tech.includes(filter)))
    : items;

  return (
    <div className={styles['filter-grid-wrapper']}>
      <div className={styles['filter-list']}>
        {filterWords.map((word) => (
          <span
            key={word}
            className={`${styles['filter-word']} ${activeFilters.includes(word) ? styles['filter-word-active'] : ''}`}
            onClick={() => handleFilterClick(word)}
          >
            {word}
          </span>
        ))}
      </div>

      <Grid items={filteredItems} />
    </div>
  );
};

export default FilterableGrid;