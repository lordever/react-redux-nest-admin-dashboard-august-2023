import React, {FC, memo} from 'react';
import styles from './text.module.less';

interface TextProps {
    text: string;
}

const Text: FC<TextProps> = ({text}) => {
    return (
        <p className={styles.text}>
            {text}
        </p>
    );
};

export default memo(Text);