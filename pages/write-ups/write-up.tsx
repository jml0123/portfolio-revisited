import React from 'react';
import sharedStyles from '../../styles/scss/Shared.module.scss'; 
import styles from '../../styles/scss/WriteUp.module.scss'; 

// Route is /write-ups/{project name}

const writeUp = (WrappedComponent: React.ComponentType) => {

    const AppliedWriteUp: React.FC<any> = (props: any) => {
        return(
            <main>
                <div className={styles["write-up-page-wrapper"]}>
                <div className={styles["write-up-page"]}>
                    <WrappedComponent {...props}/>
                </div>
                </div>
            </main>
        )
    }
    return AppliedWriteUp
};

export default writeUp;