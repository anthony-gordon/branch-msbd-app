import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  FormLayout,
  TextField,
  Form,
  Button,
  RangeSlider
} from "@shopify/polaris";
import { json, redirect } from "@remix-run/node";
import {
    useLoaderData,
    useSubmit,
  } from "@remix-run/react";
import shopify from '~/shopify.server';

import {useState, useCallback} from 'react';
import { fetchSettings } from "../models/variantShipDateData.server";



export async function loader({ request }) {
  const settings = await fetchSettings()

  return json({settings});
}

export default function SettingsPage() {
  const submit = useSubmit();
  const loadData = useLoaderData();
  const settings = loadData.settings[0];

  const [buffer, setBuffer] = useState(settings.buffer);
  const [defaultProcessingTime, setDefaultProcessingTime] = useState(settings.defaultProcessingTime);
  const [dtcDefaultShippingRange, setDtcDefaultShippingRange] = useState(settings.dtcDefaultShippingRange);
  const [b2bDefaultShippingRange, setB2bDefaultShippingRange] = useState(settings.b2bDefaultShippingRange);
  const [dtcDateAvailableMessage, setDtcDateAvailableMessage] = useState(settings.dtcDateAvailableMessage);
  const [dtcProcessingTimeMessage, setDtcProcessingTimeMessage] = useState(settings.dtcProcessingTimeMessage);
  const [b2bDateAvailableMessage, setB2bDateAvailableMessage] = useState(settings.b2bDateAvailableMessage);
  const [b2bProcessingTimeMessage, setb2bProcessingTimeMessage] = useState(settings.b2bProcessingTimeMessage);


  const handleSubmit = useCallback(() => {
    let updatedSettingsObject = {};
    updatedSettingsObject['b2bDateAvailableMessage'] = b2bDateAvailableMessage;
    updatedSettingsObject['b2bDefaultShippingRange'] = b2bDefaultShippingRange;
    updatedSettingsObject['b2bProcessingTimeMessage'] = b2bProcessingTimeMessage;
    updatedSettingsObject['buffer'] = buffer;
    updatedSettingsObject['defaultProcessingTime'] = defaultProcessingTime;
    updatedSettingsObject['dtcDateAvailableMessage'] = dtcDateAvailableMessage;
    updatedSettingsObject['dtcDefaultShippingRange'] = dtcDefaultShippingRange;
    updatedSettingsObject['dtcProcessingTimeMessage'] = dtcProcessingTimeMessage;
    updatedSettingsObject['id'] = 1;


    const sortedSettings = Object.keys(settings).sort().reduce(
      (obj, key) => { 
        obj[key] = settings[key]; 
        return obj;
      }, 
      {}
    );

  console.log('updatedSettingsObject', updatedSettingsObject)


    let difference = JSON.stringify(updatedSettingsObject) !== JSON.stringify(sortedSettings) ? true : false;

    console.log('handle', JSON.stringify(sortedSettings), 'second', JSON.stringify(updatedSettingsObject));

    console.log('difference', difference)


    // submit(dataBaseObjectAllProducts, { method: "post" });
  }, []);

  const handleRangeSliderChange = useCallback(
    (value) => setBuffer(value),
    [],
  );

 

  console.log('settings', settings)

  return (
    <Page>
        <h1> {buffer} </h1>
      <ui-title-bar title="Settings page" />
      <Layout>
        <Layout.Section>
        <Form onSubmit={handleSubmit}>
      <FormLayout>
         <RangeSlider
            label="Buffer days"
            value={buffer}
            onChange={handleRangeSliderChange}
            output
            min={0}
            max={20}
            step={1}
          />

        <Button submit>Submit</Button>
      </FormLayout>
    </Form>

        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Resources
              </Text>
              <List>
                <List.Item>
                  <Link
                    url="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                    target="_blank"
                    removeUnderline
                  >
                    App nav best practices
                  </Link>
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
