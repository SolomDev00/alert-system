import "./index.css";
import Alert from "./components/Alert/Alert";
import { AlertTriangle, Ban, BellRing, CheckCheck, Info } from "lucide-react";

function App() {
  return (
    <div className="container">
      <Alert
        type={"alert-default"}
        title={"Update the plan for you"}
        icon={<BellRing className="alert-icon" />}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio
        necessitatibus dignissimos, quia ipsa adipisci illo nisi aliquid rerum
        ipsam sunt explicabo architecto aut enim officiis a distinctio provident
        laboriosam.`}
      />
      <Alert
        type={"alert-info"}
        title={"Some data is incomplete"}
        icon={<Info className="alert-icon" />}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio
        necessitatibus dignissimos, quia ipsa adipisci illo nisi aliquid rerum
        ipsam sunt explicabo architecto aut enim officiis a distinctio provident
        laboriosam.`}
      />
      <Alert
        type={"alert-warning"}
        title={"The password is not strong"}
        icon={<AlertTriangle className="alert-icon" />}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio
          necessitatibus dignissimos, quia ipsa adipisci illo nisi aliquid rerum
          ipsam sunt explicabo architecto aut enim officiis a distinctio provident
          laboriosam.`}
      />
      <Alert
        type={"alert-error"}
        title={"Wait, there is an error in the data"}
        icon={<Ban className="alert-icon" />}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio
        necessitatibus dignissimos, quia ipsa adipisci illo nisi aliquid rerum
        ipsam sunt explicabo architecto aut enim officiis a distinctio provident
        laboriosam.`}
      />
      <Alert
        type={"alert-sccess"}
        title={"Data updated successfully"}
        icon={<CheckCheck className="alert-icon" />}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, optio
        necessitatibus dignissimos, quia ipsa adipisci illo nisi aliquid rerum
        ipsam sunt explicabo architecto aut enim officiis a distinctio provident
        laboriosam.`}
      />
    </div>
  );
}

export default App;
