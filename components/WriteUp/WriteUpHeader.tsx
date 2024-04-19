import React from "react";
import styles from '../../styles/scss/WriteUp.module.scss'; 

interface WriteUpHeaderProps {
    title: string;
    description: string;
    backgroundColor: string;
    category: string;
    categoryColor?: string;
}

const WriteUpHeader: React.FC<WriteUpHeaderProps> = (props: WriteUpHeaderProps) => {
    return (
        <div className={styles['write-up-header--wrapper']}>
        <div className={styles['write-up-header--category']} style={{ backgroundColor: props.categoryColor}}>
        <span>{props.category}</span>
        </div>
      <div className={styles['write-up-header']}  style={{ backgroundColor: props.backgroundColor}}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
      </div>
    );

}

export default WriteUpHeader
