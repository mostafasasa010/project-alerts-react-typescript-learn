import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { TAlerts } from "../../../types/alertTypes";

interface IProps {
  type: TAlerts;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-default",
  icon,
  title,
  description,
  children,
}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className="close" size={20} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
