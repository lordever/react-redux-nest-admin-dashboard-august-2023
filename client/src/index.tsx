import { createRoot } from "react-dom/client";
import AppContainer from "./App.container";
import './common/styles/common.less'; // Import your common stylesheet

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppContainer />);