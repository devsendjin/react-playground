// import {StoreUpdater} from "./components/StoreUpdater";
// import {Debug} from "./components/ReactDebugUI";
import { Debug } from './components/ReactDebugUI';

export const App = () => {
  return (
    <div className="app">
      {/*<StoreUpdater />*/}
      {/*<Debug data={{some: 'value'}} position="top-right" />*/}
      <Debug data={{some: "value"}} />
    </div>
  );
}
