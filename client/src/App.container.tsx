import React, {useEffect, useMemo, useState} from "react";
import i18n from "./i18n";
import {I18nextProvider, useTranslation} from 'react-i18next';
import Text from "./components/common/text/text.component";
import axios from "axios";
import {TaskModel} from "@shared/models/task.model";

const AppContainer = () => {

    const {t} = useTranslation();
    const [tasks, setTasks] = useState<TaskModel[]>([]);

    useEffect(() => {
        axios.get<TaskModel[]>('/api/task')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    const renderTable = useMemo(() =>
        <table>
            <thead>
            <tr>
                <td>{t("app.table.head.nameCol")}</td>
                <td>{t("app.table.head.descriptionCol")}</td>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                <tr key={task.id}>
                    <td>
                        <Text text={task.name}/>
                    </td>
                    <td>
                        <Text text={task.description}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>, [tasks]);

    return (
        <I18nextProvider i18n={i18n}>
            <Text text={t("app.greeting")}/>
            <hr/>

            {tasks.length > 0 ? renderTable : <Text text={t("app.table.noContent")} />}

        </I18nextProvider>
    );
};

export default AppContainer;