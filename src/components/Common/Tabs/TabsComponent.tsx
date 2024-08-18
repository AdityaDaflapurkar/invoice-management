import * as React from 'react';
import { Tabs, Tab } from '@mui/material';

export interface LabelComponent {
  label: string;
  component: React.ReactNode;
}

export interface TabsComponentProps {
  labelComponentMappings: LabelComponent[];
}

export default function TabsComponent(props: TabsComponentProps) {
  const [value, setValue] = React.useState(0);
  const { labelComponentMappings } = props;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} data-testid='tabs'>
        {labelComponentMappings.map((labelComponentMapping) => (
          <Tab
            label={labelComponentMapping.label}
            key={labelComponentMapping.label}
            data-testid={`tab-${labelComponentMapping.label}`}
          />
        ))}
      </Tabs>
      {labelComponentMappings[value].component}
    </>
  );
}
