import {
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
import {useState, useContext, useEffect} from 'react';
import { settingsUpdate } from "../utils/updateFunctions"
import { MyContext } from '../MyContext';
import { fetchSettings } from "../models/variantShipDateData.server";



export async function action({ request, params }){
  const data = await request.formData();
  let object = {};

  for (var pair of data.entries()) {
    object[`${pair[0]}`] = pair[1];      
  }

  await settingsUpdate(object);
  
return redirect(`/app/settings`);
}

export async function loader({ request }) {
  const settings = await fetchSettings()

  return json({settings});
}

export default function SettingsPage() {
  console.log('settings')
  const submit = useSubmit();
  const loadData = useLoaderData();
  const settings = loadData.settings[0];

  const { buffer, setBuffer } = useContext(MyContext);
  const { b2bDateAvailableMessage, setB2bDateAvailableMessage } = useContext(MyContext);
  const { b2bDefaultShippingRange, setB2bDefaultShippingRange } = useContext(MyContext);
  const { b2bProcessingTimeMessage, setB2bProcessingTimeMessage } = useContext(MyContext);
  const { defaultProcessingTime, setDefaultProcessingTime } = useContext(MyContext);
  const { dtcDateAvailableMessage, setDtcDateAvailableMessage } = useContext(MyContext);
  const { dtcDefaultShippingRange, setDtcDefaultShippingRange } = useContext(MyContext);
  const { dtcProcessingTimeMessage, setDtcProcessingTimeMessage } = useContext(MyContext);

  useEffect(() => {
    setBuffer(settings.buffer);
    setB2bDateAvailableMessage(settings.b2bDateAvailableMessage);
    setB2bDefaultShippingRange(settings.b2bDefaultShippingRange);
    setB2bProcessingTimeMessage(settings.b2bProcessingTimeMessage);
    setDefaultProcessingTime(settings.defaultProcessingTime);
    setDtcDateAvailableMessage(settings.dtcDateAvailableMessage);
    setDtcDefaultShippingRange(settings.dtcDefaultShippingRange);
    setDtcProcessingTimeMessage(settings.dtcProcessingTimeMessage);
  }, []);

  const handleSubmit = function(){
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

    let difference = JSON.stringify(updatedSettingsObject) !== JSON.stringify(sortedSettings) ? true : false;

      // console.log('updatedSettingsObject', updatedSettingsObject)

    if(difference){
        submit(updatedSettingsObject, { method: "post" });
    }
  }

  const handleRangeSliderChange = function(value, id) {
      if(id == 'buffer'){
        setBuffer(value);
      } else if(id == 'default_processing_time') {
        setDefaultProcessingTime(value)
      } else if(id == 'dtc_default_shipping_range'){
        setDtcDefaultShippingRange(value)
      } else if(id == 'b2b_default_shipping_range'){
        setB2bDefaultShippingRange(value)
      }
    }

    const handleTextFieldChange = function(value, id) {
      if(id == 'dtc_date_available_message'){
        setDtcDateAvailableMessage(value);
      } else if(id == 'dtc_processing_time_message') {
        setDtcProcessingTimeMessage(value)
      } else if(id == 'b2b_date_available_message'){
        setB2bDateAvailableMessage(value)
      } else if(id == 'b2b_processing_time_message'){
        setB2bProcessingTimeMessage(value)
      }
    }

 
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
            id="buffer"
            onChange={handleRangeSliderChange}
            output
            min={0}
            max={20}
            step={1}
          />
          <RangeSlider
            label="Default processing time"
            value={defaultProcessingTime}
            id="default_processing_time"
            onChange={handleRangeSliderChange}
            output
            min={0}
            max={20}
            step={1}
          />
          <RangeSlider
            label="DTC default shipping range"
            value={dtcDefaultShippingRange}
            id="dtc_default_shipping_range"
            onChange={handleRangeSliderChange}
            output
            min={0}
            max={20}
            step={1}
          />
          <RangeSlider
            label="B2B default shipping range"
            value={b2bDefaultShippingRange}
            id="b2b_default_shipping_range"
            onChange={handleRangeSliderChange}
            output
            min={0}
            max={20}
            step={1}
          />
          <TextField
            label="DTC date available message"
            id="dtc_date_available_message"
            value={dtcDateAvailableMessage}
            onChange={handleTextFieldChange}
            helpText="Do not remove or modify '#date_available_description#'."
            autoComplete="off"
          />
           <TextField
            label="DTC processing time message"
            id="dtc_processing_time_message"
            value={dtcProcessingTimeMessage}
            onChange={handleTextFieldChange}
            helpText="Do not remove or modify '#processing_time_description#'."
            autoComplete="off"
          />
           <TextField
            label="B2B date available message"
            id="b2b_date_available_message"
            value={b2bDateAvailableMessage}
            onChange={handleTextFieldChange}
            helpText="Do not remove or modify '#date_available_description#'."
            autoComplete="off"
          />
           <TextField
            label="B2B processing time message"
            id="b2b_processing_time_message"
            value={b2bProcessingTimeMessage}
            onChange={handleTextFieldChange}
            helpText="Do not remove or modify '#processing_time_description#'."
            autoComplete="off"
          />

        <Button submit>Save settings</Button>
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
