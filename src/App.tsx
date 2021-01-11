import React, { useState } from "react";

import "@amino-ui/core/dist/reset.css";
import "@amino-ui/core/dist/theme.css";
import "@amino-ui/core/dist/amino.css";

import "./index.css";

import {
  Button,
  Card,
  Layout,
  Spinner,
  Text,
  TextStyle,
  Input,
  Fieldset,
  Divider,
  Checkbox,
  useInputValue,
  useCheckboxValue,
  Notice,
  Intent,
  Select,
  ListItem,
  List,
  Dialog,
  Combobox,
  RadioGroup,
  MenuButton,
  MenuItem,
  Menu,
  GroupedSelect,
  Tabs,
  VStack,
  HStack,
  Skeleton,
} from "@amino-ui/core/dist";

const App: React.FC = () => {
  const testSave = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  };

  const inputValue = useInputValue("");
  const [selectVal, setSelectVal] = useState("");
  const checkboxValue = useCheckboxValue(false);
  const [radio, setRadio] = useState("COMBINED");

  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Layout
      sidebar={<div>sidebar</div>}
      footer={<div>footer</div>}
      brand={<div>brand</div>}
      content={
        <>
          <VStack>
            <Text style={TextStyle.h1}>Amino component examples</Text>

            <Tabs
              selected={selectedTab}
              onChange={setSelectedTab}
              items={["Succeeded", "Verify", "Open"]}
            />

            <Card label="Loaders">
              <VStack>
                <Skeleton height={2} width={150} />
                <HStack>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </HStack>
              </VStack>
            </Card>

            <Card label="HStacks">
              <HStack>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </HStack>

              <Divider />

              <HStack alignment="end">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </HStack>

              <Divider />

              <HStack spacing="space-quarter">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </HStack>

              <Divider />

              <HStack spacing="space">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </HStack>

              <Divider />

              <HStack spacing="space-double">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </HStack>
            </Card>

            <Card label="VStacks">
              <VStack>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </VStack>

              <Divider />

              <VStack alignment="end">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </VStack>

              <Divider />

              <VStack spacing="space-quarter">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </VStack>

              <Divider />

              <VStack spacing="space">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </VStack>

              <Divider />

              <VStack spacing="space-double">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </VStack>
            </Card>

            <Card label="Button examples">
              <Button>No action</Button>
              <br />
              <br />
              <Button intent="danger">Danger action</Button>
              <br />
              <br />
              <Button intent="warning">Warning action</Button>
              <br />
              <br />
              <Button intent="primary">Primary action</Button>
              <br />
              <br />
              <Button intent="primary" loading>
                Perform action
              </Button>
              <br />
              <br />
              <Button loading>Perform action</Button>
            </Card>

            <Card label="Spinner examples">
              <Spinner />
            </Card>

            <Card label="Skeleton loader">
              <Skeleton />
            </Card>

            <Card label="Card with save" onSave={testSave}>
              <Notice>Only the first input is hooked up</Notice>
              <br />
              <Fieldset>
                <Input
                  label="My field full width"
                  helpText="This input has got everything!"
                  prefix="a"
                  suffix="b"
                  {...inputValue}
                />
                <Divider />
                <Input
                  value=""
                  onChange={() => {}}
                  label="My field"
                  placeholder="This one has a placeholder"
                  width={300}
                  suffix="%"
                />
                <Input
                  prefix="$"
                  value=""
                  onChange={() => {}}
                  label="My field"
                  width={300}
                />
                <Divider />
                <Input
                  value=""
                  onChange={() => {}}
                  label="My field"
                  width={300}
                  required
                  helpText="help"
                  error="This field has an error!"
                />
              </Fieldset>
            </Card>

            <Card label="Checkboxes">
              <Fieldset>
                <Checkbox {...checkboxValue} label="Single line checkbox" />
                <Checkbox
                  checked
                  onChange={() => {}}
                  label="Single line checkbox"
                />
                <Divider />
                <Checkbox
                  checked
                  onChange={() => {}}
                  label="Multi line checkbox"
                  subtitle="Subtitle content here"
                />
              </Fieldset>
            </Card>

            <Card label="Radios">
              <RadioGroup
                onChange={setRadio}
                initialValue={radio}
                items={[
                  {
                    label: "Marketing consent only (default)",
                    value: "MARKETING_ONLY",
                  },
                  { label: "Marketing + processing consent", value: "BOTH" },
                  {
                    label: "Processing consent only",
                    value: "PROCESSING_ONLY",
                  },
                  {
                    label: "Combined processing and marketing consent",
                    value: "COMBINED",
                  },
                  { label: "No consent box", value: "NONE" },
                ]}
              />
            </Card>

            <Card label="Notices">
              <Notice>no intent</Notice>
              <br />
              <Notice intent={Intent.Info}>info intent</Notice>
              <br />
              <Notice intent={Intent.Success}>success intent</Notice>
              <br />
              <Notice intent={Intent.Error}>error intent</Notice>
              <br />
              <Notice intent={Intent.Warning}>warning intent</Notice>
              <br />
              <Notice intent={Intent.Primary}>primary intent</Notice>
            </Card>

            <Card label="Selects">
              <Fieldset>
                <GroupedSelect
                  value={selectVal}
                  onChange={setSelectVal}
                  label="Example grouped select"
                  items={{
                    "group a": [
                      { label: "a", value: "a" },
                      { label: "b", value: "b" },
                    ],
                    "group b": [
                      { label: "c", value: "c" },
                      { label: "d", value: "d" },
                    ],
                    "group c": [
                      { label: "e", value: "e" },
                      { label: "f", value: "f" },
                    ],
                  }}
                  placeholder="Select an option"
                />
                <Divider />
                <Select
                  value={selectVal}
                  onChange={setSelectVal}
                  label="Example select"
                  items={[
                    {
                      label: "Option A",
                      value: "a",
                    },
                    {
                      label: "Option B",
                      value: "b",
                    },
                    {
                      label: "Option C",
                      value: "c",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                    {
                      label: "Option D",
                      value: "d",
                    },
                  ]}
                  placeholder="Select an option"
                  helpText="This one has help text"
                />
                <Divider />
                <Combobox
                  value={selectVal}
                  onChange={setSelectVal}
                  label="Country"
                  items={[
                    {
                      label: "United States",
                      value: "US",
                      icon: "//placehold.it/32x32",
                    },
                    {
                      label: "Option B",
                      value: "b",
                      icon: "//placehold.it/32x32",
                    },
                    {
                      label: "Option C",
                      value: "c",
                      icon: "//placehold.it/32x32",
                    },
                    {
                      label: "Option D",
                      value: "d",
                      icon: "//placehold.it/32x32",
                    },
                  ]}
                  placeholder="Select an option"
                  helpText="This one has help text"
                />
              </Fieldset>
            </Card>

            <Card label="List">
              <List>
                <ListItem label="hello" />
                <ListItem label="hello" />
                <ListItem label="hello" />
              </List>
            </Card>

            <Card label="Fancy list">
              <List>
                <ListItem
                  label="hello"
                  subtitle="hi"
                  icon="//placehold.it/64x64"
                />
                <ListItem
                  label="hello"
                  subtitle="hi"
                  icon="//placehold.it/64x64"
                />
                <ListItem
                  label="hello"
                  subtitle="hi"
                  icon="//placehold.it/64x64"
                />
              </List>
            </Card>

            <Card label="Super Fancy list">
              <List>
                <ListItem
                  label="hello"
                  subtitle="hi"
                  icon="//placehold.it/64x64"
                  onClick={() => {}}
                />
                <ListItem
                  label="hello"
                  subtitle="hi"
                  icon="//placehold.it/64x64"
                />
                <ListItem
                  label="hello"
                  subtitle="hi"
                  icon="//placehold.it/64x64"
                  onClick={() => {}}
                />
              </List>
            </Card>

            <Card
              label="Actions"
              actions={[<Button>Action 1</Button>, <Button>Action 2</Button>]}
            >
              hello
            </Card>

            <Card label="Menu">
              <Menu>
                <MenuItem onClick={() => alert("hi")}>hi</MenuItem>
                <MenuItem>hi</MenuItem>
                <MenuItem>hi</MenuItem>
                <MenuItem>hi</MenuItem>
              </Menu>
            </Card>
            <br />
            <Card
              label="Menu button"
              actions={[
                <MenuButton label="My menu button">
                  <Menu>
                    <MenuItem>this is some long content blah bl</MenuItem>
                    <MenuItem onClick={() => alert("hi")}>hi</MenuItem>
                    <MenuItem>hi</MenuItem>
                    <MenuItem>hi</MenuItem>
                  </Menu>
                </MenuButton>,
              ]}
            >
              hello
            </Card>

            <Card label="Dialog">
              <Button onClick={() => setOpen(true)}>Open dialog</Button>
            </Card>

            <Card label="TaxIndex test">
              <Input label="A" value="" onChange={() => {}} tabIndex={100} />
              <Input label="B" value="" onChange={() => {}} tabIndex={101} />
              <Input label="C" value="" onChange={() => {}} tabIndex={102} />
              <Select
                value={selectVal}
                onChange={setSelectVal}
                label="D"
                items={[
                  {
                    label: "Option A",
                    value: "a",
                  },
                  {
                    label: "Option B",
                    value: "b",
                  },
                  {
                    label: "Option C",
                    value: "c",
                  },
                  {
                    label: "Option D",
                    value: "d",
                  },
                ]}
                tabIndex={103}
                placeholder="Select an option"
                helpText="This one has help text"
              />
              <Input label="E" value="" onChange={() => {}} tabIndex={104} />
            </Card>
          </VStack>

          <Dialog
            open={open}
            label="Test dialog"
            actions={[<Button onClick={() => setOpen(false)}>Close</Button>]}
          >
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content
            <br />
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            this is the dialog content this is the dialog content this is the
            dialog content this is the dialog content this is the dialog content
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            this is the bottom line
          </Dialog>
        </>
      }
    />
  );
};

export default App;
