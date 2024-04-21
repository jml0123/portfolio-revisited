import React from 'react';
import styles from '../../styles/scss/WriteUp.module.scss'; 


export const writeUpUrlPath = "/dev-notes"

const writeUp = (WrappedComponent: React.ComponentType) => {

    const AppliedWriteUp: React.FC<any> = (props: any) => {
        return(
            <main>
                <div className={styles["write-up-page-wrapper"]}>
                <div className={styles["write-up-page"]}>
                    <div className={styles["content-wrapper"]}>
                    <WrappedComponent {...props}/>
                    </div>
                </div>
                </div>
            </main>
        )
    }
    return AppliedWriteUp
};

export default writeUp;