import React from "react";
import i18n from "./i18n";
import {I18nextProvider, useTranslation} from 'react-i18next';
import Text from "./components/common/text/text.component";

const AppContainer = () => {

    const {t} = useTranslation();

    return (
        <I18nextProvider i18n={i18n}>
            <Text text={t("sample.text")}/>
        </I18nextProvider>
    );
};

export default AppContainer;