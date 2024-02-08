import React, { useState } from 'react';
import styles from '../../styles/scss/FilterGrid.module.scss';
import { GridItemData } from '../Grid/Grid.types';
import { Grid } from '../Grid/Grid'; // Import your existing Grid and GridItem components

interface FilterableGridProps {
  items: GridItemData[];
}

const FilterableGrid: React.FC<FilterableGridProps> = ({ items }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filterWords: string[] = Array.from(new Set(items.flatMap((d) => d.tech)));

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