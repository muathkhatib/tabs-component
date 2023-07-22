"use client";
import React, {
  useState,
  Children,
  cloneElement,
  MouseEventHandler,
} from "react";
import "./style.css";

const TabsNavigator = ({ children }: { children: Array<any> }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tabs-header">
        {Children.map(children, (child, index) => {
          if (child.type._payload.value.name === "Tab") {
            return cloneElement(child, {
              active: activeTab === index,
              onClick: () => onTabClick(index),
            });
          }
        })}
      </div>
      <div className="tabs-content">
        {children
          .filter((child) => child.type._payload.value.name === "TabPanel")
          .map((item, index) => {
            return activeTab === index ? item : null;
          })}
      </div>
    </>
  );
};

export const Tab = ({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: any;
}) => {
  return (
    <button
      className={`tab-header ${active ? "active-tab" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabPanel = ({ children }: { children: Array<any> | string }) => {
  return <div className="tab-panel">{children}</div>;
};

export default TabsNavigator;
