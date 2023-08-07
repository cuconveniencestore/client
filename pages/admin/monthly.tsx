import { Tabs } from "antd";
import type { TabsProps } from "antd";
import MonthlyTable from "@components/admin/MonthlyTable";
import styled from "styled-components";
import { useState } from "react";
import { StringGradients } from "antd/es/progress/progress";

function Monthly() {
  const [tabKey, setTabKey] = useState<string>("");

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `연차`,
      children: <MonthlyTable tabKey={tabKey} />,
    },
    {
      key: "2",
      label: `당직`,
      children: <MonthlyTable tabKey={tabKey} />,
    },
  ];
  return (
    <Container>
      <div className="details">
        <StyledTabs
          defaultActiveKey="1"
          items={items}
          tabBarGutter={30}
          onChange={(activeKey) => setTabKey(activeKey)}
        />
      </div>
    </Container>
  );
}

export default Monthly;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0;
`;
const StyledTabs = styled(Tabs)`
  &.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: coral;
  }
`;
