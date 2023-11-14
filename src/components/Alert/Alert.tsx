import "./index.scss";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { AlertTypes } from "../../types";

interface IProps {
  type: AlertTypes;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className="alert-close" size={25} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
