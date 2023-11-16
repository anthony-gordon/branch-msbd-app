import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  init_esm,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-FROLWTDC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-DYYXLKDN.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/shopify.server
var require_shopify = __commonJS({
  "empty-module:~/shopify.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../models/variantShipDateData.server
var require_variantShipDateData = __commonJS({
  "empty-module:../models/variantShipDateData.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./../db.server
var require_db = __commonJS({
  "empty-module:./../db.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/app.variantshipdatedata.jsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
var import_shopify = __toESM(require_shopify());
var import_variantShipDateData = __toESM(require_variantShipDateData());

// app/utils/dataFormattingFunctions.js
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/dataFormattingFunctions.js"
  );
  import.meta.hot.lastModified = "1700127688520.777";
}
function returnDBShipDateStrings(dbData) {
  let dbShipDateStrings = {};
  dbData.forEach((dbDataRow) => {
    dbShipDateStrings[`${dbDataRow.productVariantId}`] = dbDataRow.shipDateMessage;
  });
  return dbShipDateStrings;
}
function updateBundleProductValues(bundleProductsArray, dataBaseObjectAllProducts) {
  bundleProductsArray.forEach((bundleProductVariantId) => {
    let furthestData = {
      processingTime: 0,
      dateAvailable: "2020-01-01"
    };
    let processingTimeArray = [];
    let dateAvailableArray = [];
    let bundleProductData = JSON.parse(dataBaseObjectAllProducts[`${bundleProductVariantId}`]);
    let bundleProductConstituentsData = JSON.parse(JSON.parse(bundleProductData.bundleProducts));
    bundleProductConstituentsData.forEach((bundleProductConstituentData) => {
      let constituentProcessingTime = JSON.parse(dataBaseObjectAllProducts[`gid://shopify/ProductVariant/${bundleProductConstituentData.variantId}`]).processingTime;
      let constituentDateAvailable = JSON.parse(dataBaseObjectAllProducts[`gid://shopify/ProductVariant/${bundleProductConstituentData.variantId}`]).dateAvailable;
      processingTimeArray.push(constituentProcessingTime);
      dateAvailableArray.push(constituentDateAvailable);
    });
    let sortedProcessingTimeArray = [...processingTimeArray].sort(function(a, b) {
      return a - b;
    }).reverse();
    let sortedDateAvailableArray = [...dateAvailableArray].sort(function(a, b) {
      return new Date(a) - new Date(b);
    }).reverse();
    furthestData.processingTime = sortedProcessingTimeArray[0];
    furthestData.dateAvailable = sortedDateAvailableArray[0];
    let bundleProductVariantRowData = JSON.parse(dataBaseObjectAllProducts[`${bundleProductVariantId}`]);
    bundleProductVariantRowData.processingTime = furthestData.processingTime;
    bundleProductVariantRowData.dateAvailable = furthestData.dateAvailable;
    dataBaseObjectAllProducts[`${bundleProductVariantId}`] = JSON.stringify(bundleProductVariantRowData);
  });
}
function formatCurrentProductData(currentProductData) {
  let dataBaseObjectAllProducts = {};
  let bundleProductsArray = [];
  for (const [key, arrayRow] of Object.entries(currentProductData)) {
    for (const [key2, variant] of Object.entries(arrayRow.variants)) {
      console.log("variant", variant);
      let tags = arrayRow.tags.map((v) => v.toLowerCase());
      let dataBaseUpdateObject = {
        productId: arrayRow.id,
        productVariantId: variant.id,
        title: `${arrayRow.title} - ${variant.title}`,
        shop: "anthony-branch-dev-store-2022",
        productHandle: arrayRow.handle,
        shipDateMessage: "",
        b2bProduct: tags.includes("b2b") ? true : false,
        bundleProduct: tags.includes("bundle") ? true : false
      };
      dataBaseUpdateObject["processingTime"] = variant["processing_time"] ? variant["processing_time"] : "2";
      dataBaseUpdateObject["dateAvailable"] = variant["date_available"] ? variant["date_available"] : "2020-01-01";
      dataBaseUpdateObject["overrideMessage"] = variant["shipping"] ? variant["shipping"] : "";
      dataBaseUpdateObject["bundleProducts"] = variant["bundle_products"] ? variant["bundle_products"] : "";
      dataBaseUpdateObject["shipDateMessage"] = variant["ship_date_string"] ? variant["ship_date_string"] : "";
      dataBaseObjectAllProducts[`${variant.id}`] = JSON.stringify(dataBaseUpdateObject);
    }
  }
  if (bundleProductsArray.length > 0) {
    updateBundleProductValues(bundleProductsArray, dataBaseObjectAllProducts);
  }
  return dataBaseObjectAllProducts;
}
function returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings) {
  let variantsToUpdateShipDateStrings = {};
  for (const [key, value] of Object.entries(currentShipDateStrings)) {
    let update = true;
    for (const [dbVariantId, dbShippingMessage] of Object.entries(dbShipDateStrings)) {
      if (key === dbVariantId) {
        if (value === dbShippingMessage) {
          update = false;
        }
      }
    }
    if (update == true) {
      let updateObject = {};
      updateObject[`${key}`] = value;
      variantsToUpdateShipDateStrings[`${key}`] = JSON.stringify(updateObject);
    }
  }
  return variantsToUpdateShipDateStrings;
}
function findParentProductId(variantId, formattedProducts) {
  let id;
  for (const [key, value] of Object.entries(formattedProducts)) {
    if (value.variants && value.variants[`${variantId}`]) {
      id = value.id;
      break;
    }
  }
  return id;
}
function formatBulkDataOperationJSON(productsObject) {
  console.log(productsObject);
  let formattedProducts = {};
  for (const [key, value] of Object.entries(productsObject)) {
    if (!value[`__parentId`]) {
      formattedProducts[`${value.id}`] = value;
      formattedProducts[`${value.id}`]["variants"] = {};
    } else if (value[`__parentId`] && value[`__parentId`].includes("/Product/")) {
      formattedProducts[`${value[`__parentId`]}`]["variants"][`${value["id"]}`] = value;
    } else if (value[`__parentId`] && value[`__parentId`].includes("/ProductVariant/")) {
      let parentProductId = findParentProductId(value[`__parentId`], formattedProducts);
      formattedProducts[`${parentProductId}`]["variants"][`${value["__parentId"]}`][`${value["key"]}`] = value["value"];
    }
  }
  return formattedProducts;
}

// app/utils/msbdFunctions.js
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/msbdFunctions.js"
  );
  import.meta.hot.lastModified = "1700127688521.9175";
}
function generateShipMessage(variantData) {
  let buffer = 5;
  let dtcProcessingTimeMessage = "Ships for free #processing_time_description#.";
  let dtcDateAvailableMessage = "Ships for free #date_available_description#.";
  let b2bProcessingTimeMessage = "Ships with white glove installation #processing_time_description#.";
  let b2bDateAvailableMessage = "Ships with white glove installation #date_available_description#.";
  let dtcDefaultShippingRange = 1;
  let b2bDefaultShippingRange = 1;
  let message = "";
  let shippingProcessingMessage = "";
  if (variantData.overrideMessage !== "") {
    shippingProcessingMessage = variantData.overrideMessage;
  } else {
    let processingTimeDifference = parseInt(variantData.processingTime);
    let b2b_product = variantData.b2bProduct;
    let date = new Date(variantData.dateAvailable);
    let bufferDays = buffer == 0 ? 0 : parseInt(buffer * 7 / 5);
    let hours = Math.floor(date.getTimezoneOffset() / 60);
    if (hours !== 0) {
      if (hours > 0) {
        date.setDate(date.getDate() + 1);
      }
    }
    date.setDate(date.getDate() + bufferDays);
    let dateDifference = Math.ceil(parseFloat((new Date(date) - /* @__PURE__ */ new Date()) / (1e3 * 3600 * 24)));
    let daysUntilAvailable = dateDifference > processingTimeDifference ? dateDifference : processingTimeDifference;
    let weeksUntilAvailable = Math.round(daysUntilAvailable / 7);
    if (dateDifference > processingTimeDifference) {
      let nextMonday = date;
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      nextMonday.setDate(nextMonday.getDate() + ((7 - nextMonday.getDay()) % 7 + 1) % 7);
      const nth = function(d) {
        if (d > 3 && d < 21)
          return `${d}th`;
        switch (d % 10) {
          case 1:
            return `${d}st`;
          case 2:
            return `${d}nd`;
          case 3:
            return `${d}rd`;
          default:
            return `${d}th`;
        }
      };
      let dateAvailableDescription = `the week of ${monthNames[nextMonday.getMonth()]} ${nth(nextMonday.getDate())}`;
      if (b2b_product) {
        message = b2bDateAvailableMessage;
        shippingProcessingMessage = message.replace(`#date_available_description#`, dateAvailableDescription);
      } else {
        message = dtcDateAvailableMessage;
        shippingProcessingMessage = message.replace(`#date_available_description#`, dateAvailableDescription);
      }
    } else {
      if (b2b_product) {
        let range = b2bDefaultShippingRange;
        let processingTimeDescription = `in ${weeksUntilAvailable > 1 && weeksUntilAvailable > range ? weeksUntilAvailable - range : 1}-${weeksUntilAvailable > 1 ? weeksUntilAvailable + range : 1 + range * 2} weeks`;
        message = b2bProcessingTimeMessage;
        shippingProcessingMessage = message.replace(`#processing_time_description#`, processingTimeDescription);
      } else {
        let range = dtcDefaultShippingRange;
        let processingTimeDescription = `in ${daysUntilAvailable > 1 && daysUntilAvailable > range ? daysUntilAvailable - range : 1}-${daysUntilAvailable > 1 ? daysUntilAvailable + range : 1 + range * 2} business days`;
        message = dtcProcessingTimeMessage;
        shippingProcessingMessage = message.replace(`#processing_time_description#`, processingTimeDescription);
      }
    }
  }
  return shippingProcessingMessage;
}
function returnCurrentShipDateStrings(currentData) {
  let currentShipDateStrings = {};
  for (const [key, value] of Object.entries(currentData)) {
    let shipMessage = generateShipMessage(JSON.parse(value));
    currentShipDateStrings[`${key}`] = shipMessage;
  }
  return currentShipDateStrings;
}

// app/utils/updateFunctions.jsx
init_remix_hmr();
var import_db = __toESM(require_db());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/updateFunctions.jsx"
  );
  import.meta.hot.lastModified = "1700127688522.874";
}

// app/routes/app.variantshipdatedata.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.variantshipdatedata.jsx"
  );
  import.meta.hot.lastModified = "1700127868083.5283";
}
function variantShipDataDataList() {
  const loadData = useLoaderData();
  const bulkOperationData = loadData.bulkOperation;
  const dbShipDateData = loadData.dbProducts;
  const url = loadData.url.data.node.url;
  const products = loadData.products;
  const formattedProducts = formatBulkDataOperationJSON(products);
  let dataBaseObjectAllProducts = formatCurrentProductData(formattedProducts);
  console.log("dataBaseObjectAllProducts", dataBaseObjectAllProducts);
  let dbShipDateStrings = returnDBShipDateStrings(dbShipDateData);
  let currentShipDateStrings = returnCurrentShipDateStrings(dataBaseObjectAllProducts);
  let variantsToUpdateShipDateStrings = returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings);
  const submit = useSubmit();
  function handleUpdateMetafieldsClick() {
    variantsToUpdateShipDateStrings["submission_type"] = JSON.stringify({ submission_type: "update_metafields" });
    console.log("variantsToUpdateShipDateStrings", variantsToUpdateShipDateStrings);
    let formData = new FormData();
    Object.keys(variantsToUpdateShipDateStrings).forEach((key) => {
      if (typeof variantsToUpdateShipDateStrings[key] !== "object") {
        formData.append(key, variantsToUpdateShipDateStrings[key]);
      } else {
        formData.append(key, JSON.stringify(variantsToUpdateShipDateStrings[key]));
      }
    });
    let array = [];
    let submission_type = "";
    for (var pair of formData.entries()) {
      if (JSON.parse(pair[1])["submission_type"]) {
        submission_type = JSON.parse(pair[1])["submission_type"];
      } else {
        array.push(JSON.parse(pair[1]));
      }
    }
    console.log("array", array);
    if (array.length > 0) {
      submit(variantsToUpdateShipDateStrings, { method: "post" });
    }
  }
  function handleUpdateDataBaseClick() {
    dataBaseObjectAllProducts["submission_type"] = JSON.stringify({ submission_type: "update_db" });
    console.log("dataBaseObjectAllProducts", dataBaseObjectAllProducts);
    submit(dataBaseObjectAllProducts, { method: "post" });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleUpdateDataBaseClick(), children: "Submit" }, void 0, false, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 299,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleUpdateMetafieldsClick(variantsToUpdateShipDateStrings), children: "Update metafields" }, void 0, false, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 300,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.variantshipdatedata.jsx",
    lineNumber: 298,
    columnNumber: 9
  }, this);
}
export {
  variantShipDataDataList as default
};
//# sourceMappingURL=/build/routes/app.variantshipdatedata-U74AANYU.js.map
