var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/db.server.js
var require_db_server = __commonJS({
  "app/db.server.js"(exports, module2) {
    "use strict";
    var { PrismaClient } = require("@prisma/client"), prisma2 = global.prisma || new PrismaClient();
    global.prisma || (global.prisma = new PrismaClient());
    module2.exports = prisma2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_react = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_isbot = __toESM(require("isbot"));

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-10"), prisma = require_db_server(), shopify = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(prisma),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify.registerWebhooks({ session });
    }
  },
  future: {
    v3_webhookAdminContext: !0,
    v3_authenticatePublic: !0
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
}), shopify_server_default = shopify;
var addDocumentResponseHeaders = shopify.addDocumentResponseHeaders, authenticate = shopify.authenticate, unauthenticated = shopify.unauthenticated, login = shopify.login, registerWebhooks = shopify.registerWebhooks, sessionStorage = shopify.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough(), stream = (0, import_node2.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react3 = require("@remix-run/react");

// app/MyContext.jsx
var import_react2 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), MyContext = (0, import_react2.createContext)(), MyContextProvider = ({ children }) => {
  let [sharedState, setSharedState] = (0, import_react2.useState)("Initial value"), [buffer, setBuffer] = (0, import_react2.useState)(5), [defaultProcessingTime, setDefaultProcessingTime] = (0, import_react2.useState)(1), [dtcDefaultShippingRange, setDtcDefaultShippingRange] = (0, import_react2.useState)(1), [b2bDefaultShippingRange, setB2bDefaultShippingRange] = (0, import_react2.useState)(1), [dtcDateAvailableMessage, setDtcDateAvailableMessage] = (0, import_react2.useState)("Ships for free #date_available_description#"), [dtcProcessingTimeMessage, setDtcProcessingTimeMessage] = (0, import_react2.useState)("Ships for free #processing_time_description#"), [b2bDateAvailableMessage, setB2bDateAvailableMessage] = (0, import_react2.useState)("Ships with white glove installation #date_available_description#"), [b2bProcessingTimeMessage, setB2bProcessingTimeMessage] = (0, import_react2.useState)("Ships with white glove installation #processing_time_description#"), [allProducts, setAllProducts] = (0, import_react2.useState)({}), [settings, setSettings] = (0, import_react2.useState)({}), [dbProducts, setDbProducts] = (0, import_react2.useState)({}), [dbProductsFormatted, setDbProductsFormatted] = (0, import_react2.useState)({}), [updating, setUpdating] = (0, import_react2.useState)(!1), [amountToUpdate, setAmountToUpdate] = (0, import_react2.useState)(0), [amountLeftToUpdate, setAmountLeftToUpdate] = (0, import_react2.useState)(0), [percentageUpdated, setPercentageUpdated] = (0, import_react2.useState)(100);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MyContext.Provider, { value: {
    sharedState,
    setSharedState,
    buffer,
    setBuffer,
    defaultProcessingTime,
    setDefaultProcessingTime,
    dtcDefaultShippingRange,
    setDtcDefaultShippingRange,
    b2bDefaultShippingRange,
    setB2bDefaultShippingRange,
    dtcDateAvailableMessage,
    setDtcDateAvailableMessage,
    dtcProcessingTimeMessage,
    setDtcProcessingTimeMessage,
    b2bDateAvailableMessage,
    setB2bDateAvailableMessage,
    b2bProcessingTimeMessage,
    setB2bProcessingTimeMessage,
    allProducts,
    setAllProducts,
    settings,
    setSettings,
    dbProducts,
    setDbProducts,
    dbProductsFormatted,
    setDbProductsFormatted,
    updating,
    setUpdating,
    amountToUpdate,
    setAmountToUpdate,
    amountLeftToUpdate,
    setAmountLeftToUpdate,
    percentageUpdated,
    setPercentageUpdated
  }, children }, void 0, !1, {
    fileName: "app/MyContext.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
};

// app/root.jsx
var import_node3 = require("@remix-run/node");

// app/models/variantShipDateData.server.js
var import_db = __toESM(require_db_server());
async function fetchDBShipDateData() {
  return await import_db.default.variantShipDateData.findMany();
}
async function fetchSettings() {
  return await import_db.default.settings.findMany();
}
async function fetchUpdates() {
  return await import_db.default.updates.findMany();
}

// app/root.jsx
var import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MyContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/app.product.$id.variants.$variantId.jsx
var app_product_id_variants_variantId_exports = {};
__export(app_product_id_variants_variantId_exports, {
  default: () => VariantPage
});
var import_react5 = require("@remix-run/react"), import_react6 = require("react");

// app/utils/dataFormattingFunctions.js
function returnDBShipDateStrings(dbData) {
  let dbShipDateStrings = {};
  return dbData.forEach((dbDataRow) => {
    dbShipDateStrings[`${dbDataRow.productVariantId}`] = dbDataRow.shipDateMessage;
  }), dbShipDateStrings;
}
function updateBundleProductValues(bundleProductsArray, dataBaseObjectAllProducts) {
  bundleProductsArray.forEach((bundleProductVariantId) => {
    let furthestData = {
      processingTime: 0,
      dateAvailable: `${(/* @__PURE__ */ new Date()).toLocaleDateString("en-US").split("/").reverse().join("-")}`
    }, processingTimeArray = [], dateAvailableArray = [], bundleProductData = JSON.parse(dataBaseObjectAllProducts[`${bundleProductVariantId}`]);
    JSON.parse(JSON.parse(bundleProductData.bundleProducts)).forEach((bundleProductConstituentData) => {
      let constituentProcessingTime = JSON.parse(dataBaseObjectAllProducts[`gid://shopify/ProductVariant/${bundleProductConstituentData.variantId}`]).processingTime, constituentDateAvailable = JSON.parse(dataBaseObjectAllProducts[`gid://shopify/ProductVariant/${bundleProductConstituentData.variantId}`]).dateAvailable;
      processingTimeArray.push(constituentProcessingTime), dateAvailableArray.push(constituentDateAvailable);
    });
    let sortedProcessingTimeArray = [...processingTimeArray].sort(function(a, b) {
      return a - b;
    }).reverse(), sortedDateAvailableArray = [...dateAvailableArray].sort(function(a, b) {
      return new Date(a) - new Date(b);
    }).reverse();
    furthestData.processingTime = sortedProcessingTimeArray[0], furthestData.dateAvailable = sortedDateAvailableArray[0];
    let bundleProductVariantRowData = JSON.parse(dataBaseObjectAllProducts[`${bundleProductVariantId}`]);
    bundleProductVariantRowData.processingTime = furthestData.processingTime, bundleProductVariantRowData.dateAvailable = furthestData.dateAvailable, dataBaseObjectAllProducts[`${bundleProductVariantId}`] = JSON.stringify(bundleProductVariantRowData);
  });
}
function formatCurrentProductData(currentProductData, settings) {
  let defaultProcessingTime = parseInt(settings.defaultProcessingTime), currentDateString = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US").split("/").reverse().join("-"), dataBaseObjectAllProducts = {}, bundleProductsArray = [];
  for (let [key, arrayRow] of Object.entries(currentProductData))
    for (let [key2, variant] of Object.entries(arrayRow.variants)) {
      let tags = arrayRow.tags.map((v) => v.toLowerCase()), dataBaseUpdateObject = {
        productId: arrayRow.id,
        productVariantId: variant.id,
        title: `${arrayRow.title} - ${variant.title}`,
        shop: "anthony-branch-dev-store-2022",
        productHandle: arrayRow.handle,
        shipDateMessage: "",
        b2bProduct: !!tags.includes("b2b"),
        bundleProduct: !!tags.includes("bundle")
      };
      dataBaseUpdateObject.processingTime = variant.processing_time ? variant.processing_time : `${defaultProcessingTime}`, dataBaseUpdateObject.dateAvailable = variant.date_available ? variant.date_available : `${currentDateString}`, dataBaseUpdateObject.overrideMessage = variant.shipping ? variant.shipping : "", dataBaseUpdateObject.bundleProducts = variant.bundle_products ? variant.bundle_products : "", dataBaseUpdateObject.shipDateMessage = variant.ship_date_string ? variant.ship_date_string : "", dataBaseUpdateObject.shipDateMessageId = variant.ship_date_string_id ? variant.ship_date_string_id : "", dataBaseObjectAllProducts[`${variant.id}`] = JSON.stringify(dataBaseUpdateObject);
    }
  return bundleProductsArray.length > 0 && updateBundleProductValues(bundleProductsArray, dataBaseObjectAllProducts), dataBaseObjectAllProducts;
}
function returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings) {
  let variantsToUpdateShipDateStrings = {};
  for (let [key, value] of Object.entries(currentShipDateStrings)) {
    let update = !0;
    for (let [dbVariantId, dbShippingMessage] of Object.entries(dbShipDateStrings))
      key === dbVariantId && value === dbShippingMessage && (update = !1);
    if (update == !0) {
      let updateObject = {};
      updateObject[`${key}`] = value, variantsToUpdateShipDateStrings[`${key}`] = JSON.stringify(updateObject);
    }
  }
  return variantsToUpdateShipDateStrings;
}
function findParentProductId(variantId, formattedProducts) {
  let id;
  for (let [key, value] of Object.entries(formattedProducts))
    if (value.variants && value.variants[`${variantId}`]) {
      id = value.id;
      break;
    }
  return id;
}
function formatBulkDataOperationJSON(productsObject) {
  let formattedProducts = {};
  for (let [key, value] of Object.entries(productsObject))
    if (!value.__parentId)
      formattedProducts[`${value.id}`] = value, formattedProducts[`${value.id}`].variants = {};
    else if (value.__parentId && value.__parentId.includes("/Product/"))
      formattedProducts[`${value.__parentId}`].variants[`${value.id}`] = value;
    else if (value.__parentId && value.__parentId.includes("/ProductVariant/")) {
      let parentProductId = findParentProductId(value.__parentId, formattedProducts);
      formattedProducts[`${parentProductId}`].variants[`${value.__parentId}`][`${value.key}`] = value.value, formattedProducts[`${parentProductId}`].variants[`${value.__parentId}`][`${value.key}_id`] = value.id;
    }
  return formattedProducts;
}
function formatDbProducts(dbProducts) {
  let formattedDbProducts = {};
  for (let [key, value] of Object.entries(dbProducts))
    formattedDbProducts[`${value.productId}`] ? formattedDbProducts[`${value.productId}`][`${value.productVariantId}`] = value : (formattedDbProducts[`${value.productId}`] = {}, formattedDbProducts[`${value.productId}`][`${value.productVariantId}`] = value);
  return formattedDbProducts;
}
function returnMetafieldIds(currentData) {
  let metafieldIds = {};
  for (let [key, value] of Object.entries(currentData))
    metafieldIds[`${key}`] = JSON.parse(value).shipDateMessageId;
  return metafieldIds;
}
function returnCurrentProductsArrayDifferences(currentProductsArray, dbShipDateData) {
  let currentProductsArrayDifferences = [];
  return currentProductsArray.forEach((currentProduct) => {
    let update = !0, currentProductToBeUpdated = currentProduct, currentProductShippingString = currentProduct.shipDateMessage, currentProductVariantId = currentProduct.productVariantId, dbProduct = dbShipDateData.find((x) => x.productVariantId === `${currentProductVariantId}`);
    if (dbProduct) {
      let dbProductShippingString = dbProduct.shipDateMessage, dbProductUpdatedRecord = dbProduct.updatedRecord, currentTime = /* @__PURE__ */ new Date(), dbProductUpdatedRecordArray = dbProductUpdatedRecord.replace("[", "").replace("[", "").split(",");
      dbProductUpdatedRecordArray.unshift(`{${currentTime}: ${currentProductShippingString}}`);
      let dbProductUpdatedRecordArrayMostRecent = dbProductUpdatedRecordArray.slice(0, 5);
      currentProductToBeUpdated.updatedRecord = dbProductUpdatedRecordArrayMostRecent.toString(), currentProductShippingString == dbProductShippingString && (update = !1);
    }
    update == !0 && currentProductsArrayDifferences.push(currentProductToBeUpdated);
  }), currentProductsArrayDifferences;
}

// app/routes/app.product.$id.variants.$variantId.jsx
var import_polaris = require("@shopify/polaris"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function VariantPage() {
  let { dbProducts, setDbProducts } = (0, import_react6.useContext)(MyContext), params = (0, import_react5.useParams)(), [rows, setRows] = (0, import_react6.useState)([]), [currentProduct, setCurrentProduct] = (0, import_react6.useState)([]), [currentVariant, setCurrentVariant] = (0, import_react6.useState)([]);
  return (0, import_react6.useEffect)(() => {
    console.log("currentProduct", currentProduct, "currentVariant", currentVariant), currentProduct && currentProduct.length == 0 && dbProducts && dbProducts.length > 0 && (setCurrentProduct(formatDbProducts(dbProducts)[`gid://shopify/Product/${params.id}`]), setCurrentVariant(formatDbProducts(dbProducts)[`gid://shopify/Product/${params.id}`][`gid://shopify/ProductVariant/${params.variantId}`]));
    let updateRows = [];
    if (currentProduct && Object.keys(currentProduct).length > 0 && currentVariant && Object.keys(currentVariant).length > 0) {
      let updatedRecordArray = currentVariant.updatedRecord.split("},{");
      console.log("here", currentVariant.id, "updatedRecordArry", updatedRecordArray);
      let updateRows2 = [];
      updatedRecordArray.forEach((updatedRecordRow) => {
        let row = [], dateString = Date.parse(updatedRecordRow.split(": ").shift().replaceAll(",", "").replaceAll("}", "").replaceAll("{", "")), messageString = updatedRecordRow.split(": ").pop().replaceAll(",", "").replaceAll("}", "").replaceAll("{", ""), date = new Date(dateString);
        console.log("dateString", dateString, messageString), row.push(`${date.toLocaleString("en-US", {
          timeZone: "America/New_York"
        })} - EST`), row.push(messageString), updateRows2.push(row);
      }), console.log("updateRows", updateRows2), setRows(updateRows2);
    }
  }, [dbProducts, currentProduct, currentVariant]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Page, { title: `Variant change log: ${Object.keys(currentVariant).length > 0 && currentVariant.productVariantId.split("/ProductVariant/").pop()} (${Object.keys(currentVariant).length > 0 && currentVariant.title})`, children: [
    Object.keys(currentVariant).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Link, { to: `/app/products/${params.id}`, children: [
      "Back to: ",
      currentVariant.title.split(" - ").shift()
    ] }, void 0, !0, {
      fileName: "app/routes/app.product.$id.variants.$variantId.jsx",
      lineNumber: 63,
      columnNumber: 56
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris.DataTable,
      {
        columnContentTypes: [
          "date",
          "text"
        ],
        headings: [
          "Date/time changed",
          "Message"
        ],
        rows
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.product.$id.variants.$variantId.jsx",
        lineNumber: 65,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app.product.$id.variants.$variantId.jsx",
      lineNumber: 64,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.product.$id.variants.$variantId.jsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

// app/routes/app.products.$id.jsx
var app_products_id_exports = {};
__export(app_products_id_exports, {
  default: () => ProductPage
});
var import_react8 = require("@remix-run/react"), import_react9 = require("react");
var import_polaris2 = require("@shopify/polaris"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ProductPage() {
  let { dbProducts, setDbProducts } = (0, import_react9.useContext)(MyContext), params = (0, import_react8.useParams)(), [rows, setRows] = (0, import_react9.useState)([]), [currentProduct, setCurrentProduct] = (0, import_react9.useState)([]);
  return console.log("currentProduct", currentProduct, formatDbProducts(dbProducts)), (0, import_react9.useEffect)(() => {
    currentProduct && currentProduct.length == 0 && dbProducts && dbProducts.length > 0 && setCurrentProduct(formatDbProducts(dbProducts)[`gid://shopify/Product/${params.id}`]);
    let updateRows = [];
    currentProduct && Object.keys(currentProduct).length > 0 && (console.log("here", currentProduct), Object.entries(currentProduct).forEach(([key, value]) => {
      let row = [];
      row.push(value.title.split(" - ").pop()), row.push(value.productVariantId.split("ProductVariant/").pop()), row.push(value.dateAvailable), row.push(value.processingTime), row.push(value.shipDateMessage), row.push(/* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Link, { to: `/app/product/${params.id}/variants/${value.productVariantId.split("ProductVariant/").pop()}`, children: "See change log" }, void 0, !1, {
        fileName: "app/routes/app.products.$id.jsx",
        lineNumber: 34,
        columnNumber: 26
      }, this)), updateRows.push(row);
    })), setRows(updateRows);
  }, [dbProducts, currentProduct]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Page, { title: "Ship date message by variant", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react10.Link, { to: "/app", children: "Back to product list" }, void 0, !1, {
      fileName: "app/routes/app.products.$id.jsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_polaris2.DataTable,
      {
        columnContentTypes: [
          "text",
          "text",
          "date",
          "numeric",
          "text",
          "text"
        ],
        headings: [
          "Variant title",
          "Variant ID",
          "Date available",
          "Processing time",
          "Ship date message",
          "Ship date message record"
        ],
        rows
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.products.$id.jsx",
        lineNumber: 51,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/app.products.$id.jsx",
      lineNumber: 50,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.products.$id.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

// app/routes/qrcodes.$id.scan.jsx
var qrcodes_id_scan_exports = {};
__export(qrcodes_id_scan_exports, {
  loader: () => loader
});
var import_node4 = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant")), import_db3 = __toESM(require_db_server());

// app/models/QRCode.server.js
var import_qrcode = __toESM(require("qrcode")), import_tiny_invariant = __toESM(require("tiny-invariant")), import_db2 = __toESM(require_db_server());
async function getQRCode(id, graphql) {
  let qrCode = await import_db2.default.qRCode.findFirst({ where: { id } });
  return qrCode ? supplementQRCode(qrCode, graphql) : null;
}
function getQRCodeImage(id) {
  let url = new URL(`/qrcodes/${id}/scan`, process.env.SHOPIFY_APP_URL);
  return import_qrcode.default.toDataURL(url.href);
}
function getDestinationUrl(qrCode) {
  if (qrCode.destination === "product")
    return `https://${qrCode.shop}/products/${qrCode.productHandle}`;
  let match = /gid:\/\/shopify\/ProductVariant\/([0-9]+)/.exec(qrCode.productVariantId);
  return (0, import_tiny_invariant.default)(match, "Unrecognized product variant ID"), `https://${qrCode.shop}/cart/${match[1]}:1`;
}
async function supplementQRCode(qrCode, graphql) {
  let qrCodeImagePromise = getQRCodeImage(qrCode.id), response = await graphql(
    `
      query supplementQRCode($id: ID!) {
        product(id: $id) {
          title
          images(first: 1) {
            nodes {
              altText
              url
            }
          }
        }
      }
    `,
    {
      variables: {
        id: qrCode.productId
      }
    }
  ), {
    data: { product }
  } = await response.json();
  return {
    ...qrCode,
    productDeleted: !product?.title,
    productTitle: product?.title,
    productImage: product?.images?.nodes[0]?.url,
    productAlt: product?.images?.nodes[0]?.altText,
    destinationUrl: getDestinationUrl(qrCode),
    image: await qrCodeImagePromise
  };
}
function validateQRCode(data) {
  let errors = {};
  if (data.title || (errors.title = "Title is required"), data.productId || (errors.productId = "Product is required"), data.destination || (errors.destination = "Destination is required"), Object.keys(errors).length)
    return errors;
}

// app/routes/qrcodes.$id.scan.jsx
var loader = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.id, "Could not find QR code destination");
  let id = Number(params.id), qrCode = await import_db3.default.qRCode.findFirst({ where: { id } });
  return (0, import_tiny_invariant2.default)(qrCode, "Could not find QR code destination"), await import_db3.default.qRCode.update({
    where: { id },
    data: { scans: { increment: 1 } }
  }), (0, import_node4.redirect)(getDestinationUrl(qrCode));
};

// app/routes/app.qrcodes.$id.jsx
var app_qrcodes_id_exports = {};
__export(app_qrcodes_id_exports, {
  action: () => action,
  default: () => QRCodeForm,
  loader: () => loader2
});
var import_react11 = require("react"), import_node5 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_polaris3 = require("@shopify/polaris"), import_polaris_icons = require("@shopify/polaris-icons"), import_db4 = __toESM(require_db_server());
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader2({ request, params }) {
  let { admin } = await authenticate.admin(request);
  return params.id === "new" ? (0, import_node5.json)({
    destination: "product",
    title: ""
  }) : (0, import_node5.json)(await getQRCode(Number(params.id), admin.graphql));
}
async function action({ request, params }) {
  let { session } = await authenticate.admin(request), { shop } = session, data = {
    ...Object.fromEntries(await request.formData()),
    shop
  };
  if (data.action === "delete")
    return await import_db4.default.qRCode.delete({ where: { id: Number(params.id) } }), (0, import_node5.redirect)("/app");
  let errors = validateQRCode(data);
  if (errors)
    return (0, import_node5.json)({ errors }, { status: 422 });
  let qrCode = params.id === "new" ? await import_db4.default.qRCode.create({ data }) : await import_db4.default.qRCode.update({ where: { id: Number(params.id) }, data });
  return (0, import_node5.redirect)(`/app/qrcodes/${qrCode.id}`);
}
function QRCodeForm() {
  let errors = (0, import_react12.useActionData)()?.errors || {}, qrCode = (0, import_react12.useLoaderData)(), [formState, setFormState] = (0, import_react11.useState)(qrCode), [cleanFormState, setCleanFormState] = (0, import_react11.useState)(qrCode), isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState), nav = (0, import_react12.useNavigation)(), isSaving = nav.state === "submitting" && nav.formData?.get("action") !== "delete", isDeleting = nav.state === "submitting" && nav.formData?.get("action") === "delete", navigate = (0, import_react12.useNavigate)();
  async function selectProduct() {
    let products = await window.shopify.resourcePicker({
      type: "product",
      action: "select"
      // customized action verb, either 'select' or 'add',
    });
    if (products) {
      let { images, id, variants, title, handle } = products[0];
      setFormState({
        ...formState,
        productId: id,
        productVariantId: variants[0].id,
        productTitle: title,
        productHandle: handle,
        productAlt: images[0]?.altText,
        productImage: images[0]?.originalSrc
      });
    }
  }
  let submit = (0, import_react12.useSubmit)();
  function handleSave() {
    let data = {
      title: formState.title,
      productId: formState.productId || "",
      productVariantId: formState.productVariantId || "",
      productHandle: formState.productHandle || "",
      destination: formState.destination
    };
    setCleanFormState({ ...formState });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ui-title-bar", { title: qrCode.id ? "Edit QR code" : "Create new QR code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { variant: "breadcrumb", onClick: () => navigate("/app"), children: "QR codes" }, void 0, !1, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 130,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingLg", children: "Title" }, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 139,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_polaris3.TextField,
            {
              id: "title",
              helpText: "Only store staff can see this title",
              label: "title",
              labelHidden: !0,
              autoComplete: "off",
              value: formState.title,
              onChange: (title) => setFormState({ ...formState, title }),
              error: errors.title
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 142,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 138,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.InlineStack, { align: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingLg", children: "Product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 157,
              columnNumber: 19
            }, this),
            formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Button, { variant: "plain", onClick: selectProduct, children: "Change product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 161,
              columnNumber: 21
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 156,
            columnNumber: 17
          }, this),
          formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.InlineStack, { blockAlign: "center", gap: "500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_polaris3.Thumbnail,
              {
                source: formState.productImage || import_polaris_icons.ImageMajor,
                alt: formState.productAlt
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.qrcodes.$id.jsx",
                lineNumber: 168,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { as: "span", variant: "headingMd", fontWeight: "semibold", children: formState.productTitle }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 172,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 167,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.BlockStack, { gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Button, { onClick: selectProduct, id: "select-product", children: "Select product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 178,
              columnNumber: 21
            }, this),
            errors.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_polaris3.InlineError,
              {
                message: errors.productId,
                fieldID: "myFieldID"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.qrcodes.$id.jsx",
                lineNumber: 182,
                columnNumber: 23
              },
              this
            ) : null
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 177,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Bleed, { marginInlineStart: "200", marginInlineEnd: "200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Divider, {}, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 190,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 189,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.InlineStack, { gap: "500", align: "space-between", blockAlign: "start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_polaris3.ChoiceList,
              {
                title: "Scan destination",
                choices: [
                  { label: "Link to product page", value: "product" },
                  {
                    label: "Link to checkout page with product in the cart",
                    value: "cart"
                  }
                ],
                selected: [formState.destination],
                onChange: (destination) => setFormState({
                  ...formState,
                  destination: destination[0]
                }),
                error: errors.destination
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.qrcodes.$id.jsx",
                lineNumber: 193,
                columnNumber: 19
              },
              this
            ),
            qrCode.destinationUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_polaris3.Button,
              {
                variant: "plain",
                url: qrCode.destinationUrl,
                target: "_blank",
                children: "Go to destination URL"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.qrcodes.$id.jsx",
                lineNumber: 212,
                columnNumber: 21
              },
              this
            ) : null
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 192,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 155,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 136,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingLg", children: "QR code" }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        qrCode ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.EmptyState, { image: qrCode.image, imageContained: !0 }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 231,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.EmptyState, { image: "", children: "Your QR code will appear here after you save" }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 233,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.BlockStack, { gap: "300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_polaris3.Button,
            {
              disabled: !qrCode?.image,
              url: qrCode?.image,
              download: !0,
              variant: "primary",
              children: "Download"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 238,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_polaris3.Button,
            {
              disabled: !qrCode.id,
              url: `/qrcodes/${qrCode.id}`,
              target: "_blank",
              children: "Go to public URL"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 246,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 237,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 226,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_polaris3.PageActions,
        {
          secondaryActions: [
            {
              content: "Delete",
              loading: isDeleting,
              disabled: !qrCode.id || !qrCode || isSaving || isDeleting,
              destructive: !0,
              outline: !0,
              onAction: () => submit({ action: "delete" }, { method: "post" })
            }
          ],
          primaryAction: {
            content: "Save",
            loading: isSaving,
            disabled: !isDirty || isSaving || isDeleting,
            onAction: handleSave
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 257,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 256,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.qrcodes.$id.jsx",
    lineNumber: 128,
    columnNumber: 5
  }, this);
}

// app/routes/app.settings.jsx
var app_settings_exports = {};
__export(app_settings_exports, {
  action: () => action2,
  default: () => SettingsPage,
  loader: () => loader3
});
var import_polaris4 = require("@shopify/polaris"), import_node6 = require("@remix-run/node"), import_react13 = require("@remix-run/react"), import_react14 = require("react");

// app/utils/updateFunctions.jsx
var import_db5 = __toESM(require_db_server());
async function metafieldUpdateGraphQLCall(variantId, variantShippingMessage, admin, metafieldId) {
  return await (await admin.graphql(
    metafieldId && metafieldId !== "" ? `
    mutation {
        productVariantUpdate(
        input : {
            id: "gid://shopify/ProductVariant/${variantId}",
            metafields: [
                {
                    id: "${metafieldId}"
                    namespace: "variant"
                    key: "ship_date_string"
                    value: "${variantShippingMessage}"
                    type: "single_line_text_field"
                }
            ]
        }) {
            productVariant {
            metafields(first: 10) {
                edges {
                node {
                    namespace
                    key
                    value
                }
                }
            }
            }
        }
        }
` : `
mutation {
    productVariantUpdate(
    input : {
        id: "gid://shopify/ProductVariant/${variantId}",
        metafields: [
            {
                namespace: "variant"
                key: "ship_date_string"
                value: "${variantShippingMessage}"
                type: "single_line_text_field"
            }
        ]
    }) {
        productVariant {
        metafields(first: 10) {
            edges {
            node {
                namespace
                key
                value
            }
            }
        }
        }
    }
    }
`
  )).json();
}
function metafieldUpdateGraphQL(variantId, variantShippingMessage, admin, metafieldId) {
  return new Promise(async (resolve, reject) => {
    let result = await metafieldUpdateGraphQLCall(variantId, variantShippingMessage, admin, metafieldId);
    resolve(result);
  });
}
async function metafieldsUpdate(array, admin, metafieldIds) {
  let updates = [];
  try {
    let index = 0;
    for (let arrayRow in array)
      if (index < 10) {
        let variantId = Object.keys(array[`${index}`])[0].split("/ProductVariant/").pop(), metafieldId = metafieldIds[`${Object.keys(array[`${index}`])[0]}`];
        updates.push(array[`${index}`]);
        let variantShippingMessage = Object.values(array[`${index}`])[0], result = await metafieldUpdateGraphQL(variantId, variantShippingMessage, admin, metafieldId);
        index = index + 1;
      }
  } catch (error) {
    console.error("An error occurred:", error);
  }
  return updates;
}
async function dbUpdate(array) {
  let currentTime = /* @__PURE__ */ new Date(), promises = array.map(({ productVariantId, processingTime, dateAvailable, productId, productHandle, title, b2bProduct, bundleProduct, overrideMessage, shipDateMessage, updatedRecord }) => import_db5.default.variantShipDateData.upsert(
    {
      where: {
        productVariantId
      },
      update: {
        processingTime: `${processingTime}`,
        dateAvailable: `${dateAvailable}`,
        bundleProduct,
        b2bProduct,
        updated: currentTime,
        overrideMessage,
        shipDateMessage,
        updatedRecord
      },
      create: {
        processingTime: `${processingTime}`,
        dateAvailable: `${dateAvailable}`,
        productVariantId,
        productId,
        title,
        shop: "",
        productHandle,
        shipDateMessage,
        bundleProduct,
        b2bProduct,
        overrideMessage,
        updated: currentTime,
        updatedRecord: ""
      }
    }
  ));
  return await Promise.all(promises), "done";
}
async function settingsUpdate(data) {
  let { buffer, defaultProcessingTime, dtcDateAvailableMessage, dtcProcessingTimeMessage, dtcDefaultShippingRange, b2bDefaultShippingRange, b2bDateAvailableMessage, b2bProcessingTimeMessage } = data;
  await import_db5.default.settings.update({
    where: {
      id: 1
    },
    data: {
      buffer: parseInt(buffer),
      defaultProcessingTime: parseInt(defaultProcessingTime),
      dtcDateAvailableMessage,
      dtcProcessingTimeMessage,
      dtcDefaultShippingRange: parseInt(dtcDefaultShippingRange),
      b2bDefaultShippingRange: parseInt(b2bDefaultShippingRange),
      b2bDateAvailableMessage,
      b2bProcessingTimeMessage
    }
  });
}
async function dbUpdateRecord() {
  let currentTime = /* @__PURE__ */ new Date();
  return await import_db5.default.updates.create({
    data: {
      updated: `${currentTime}`
    }
  });
}

// app/routes/app.settings.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function action2({ request, params }) {
  let data = await request.formData(), object = {};
  for (var pair of data.entries())
    object[`${pair[0]}`] = pair[1];
  return await settingsUpdate(object), (0, import_node6.redirect)("/app/settings");
}
async function loader3({ request }) {
  let settings = await fetchSettings();
  return (0, import_node6.json)({ settings });
}
function SettingsPage() {
  console.log("settings");
  let submit = (0, import_react13.useSubmit)(), settings = (0, import_react13.useLoaderData)().settings[0], { buffer, setBuffer } = (0, import_react14.useContext)(MyContext), { b2bDateAvailableMessage, setB2bDateAvailableMessage } = (0, import_react14.useContext)(MyContext), { b2bDefaultShippingRange, setB2bDefaultShippingRange } = (0, import_react14.useContext)(MyContext), { b2bProcessingTimeMessage, setB2bProcessingTimeMessage } = (0, import_react14.useContext)(MyContext), { defaultProcessingTime, setDefaultProcessingTime } = (0, import_react14.useContext)(MyContext), { dtcDateAvailableMessage, setDtcDateAvailableMessage } = (0, import_react14.useContext)(MyContext), { dtcDefaultShippingRange, setDtcDefaultShippingRange } = (0, import_react14.useContext)(MyContext), { dtcProcessingTimeMessage, setDtcProcessingTimeMessage } = (0, import_react14.useContext)(MyContext);
  (0, import_react14.useEffect)(() => {
    setBuffer(settings.buffer), setB2bDateAvailableMessage(settings.b2bDateAvailableMessage), setB2bDefaultShippingRange(settings.b2bDefaultShippingRange), setB2bProcessingTimeMessage(settings.b2bProcessingTimeMessage), setDefaultProcessingTime(settings.defaultProcessingTime), setDtcDateAvailableMessage(settings.dtcDateAvailableMessage), setDtcDefaultShippingRange(settings.dtcDefaultShippingRange), setDtcProcessingTimeMessage(settings.dtcProcessingTimeMessage);
  }, []);
  let handleSubmit = function() {
    let updatedSettingsObject = {};
    updatedSettingsObject.b2bDateAvailableMessage = b2bDateAvailableMessage, updatedSettingsObject.b2bDefaultShippingRange = b2bDefaultShippingRange, updatedSettingsObject.b2bProcessingTimeMessage = b2bProcessingTimeMessage, updatedSettingsObject.buffer = buffer, updatedSettingsObject.defaultProcessingTime = defaultProcessingTime, updatedSettingsObject.dtcDateAvailableMessage = dtcDateAvailableMessage, updatedSettingsObject.dtcDefaultShippingRange = dtcDefaultShippingRange, updatedSettingsObject.dtcProcessingTimeMessage = dtcProcessingTimeMessage, updatedSettingsObject.id = 1;
    let sortedSettings = Object.keys(settings).sort().reduce(
      (obj, key) => (obj[key] = settings[key], obj),
      {}
    );
    JSON.stringify(updatedSettingsObject) !== JSON.stringify(sortedSettings) && submit(updatedSettingsObject, { method: "post" });
  }, handleRangeSliderChange = function(value, id) {
    id == "buffer" ? setBuffer(value) : id == "default_processing_time" ? setDefaultProcessingTime(value) : id == "dtc_default_shipping_range" ? setDtcDefaultShippingRange(value) : id == "b2b_default_shipping_range" && setB2bDefaultShippingRange(value);
  }, handleTextFieldChange = function(value, id) {
    id == "dtc_date_available_message" ? setDtcDateAvailableMessage(value) : id == "dtc_processing_time_message" ? setDtcProcessingTimeMessage(value) : id == "b2b_date_available_message" ? setB2bDateAvailableMessage(value) : id == "b2b_processing_time_message" && setB2bProcessingTimeMessage(value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: [
      " ",
      buffer,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ui-title-bar", { title: "Settings page" }, void 0, !1, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Form, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.FormLayout, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.RangeSlider,
          {
            label: "Buffer days",
            value: buffer,
            id: "buffer",
            onChange: handleRangeSliderChange,
            output: !0,
            min: 0,
            max: 20,
            step: 1
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 134,
            columnNumber: 10
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.RangeSlider,
          {
            label: "Default processing time",
            value: defaultProcessingTime,
            id: "default_processing_time",
            onChange: handleRangeSliderChange,
            output: !0,
            min: 0,
            max: 20,
            step: 1
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 144,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.RangeSlider,
          {
            label: "DTC default shipping range",
            value: dtcDefaultShippingRange,
            id: "dtc_default_shipping_range",
            onChange: handleRangeSliderChange,
            output: !0,
            min: 0,
            max: 20,
            step: 1
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 154,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.RangeSlider,
          {
            label: "B2B default shipping range",
            value: b2bDefaultShippingRange,
            id: "b2b_default_shipping_range",
            onChange: handleRangeSliderChange,
            output: !0,
            min: 0,
            max: 20,
            step: 1
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.TextField,
          {
            label: "DTC date available message",
            id: "dtc_date_available_message",
            value: dtcDateAvailableMessage,
            onChange: handleTextFieldChange,
            helpText: "Do not remove or modify '#date_available_description#'.",
            autoComplete: "off"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 174,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.TextField,
          {
            label: "DTC processing time message",
            id: "dtc_processing_time_message",
            value: dtcProcessingTimeMessage,
            onChange: handleTextFieldChange,
            helpText: "Do not remove or modify '#processing_time_description#'.",
            autoComplete: "off"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 182,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.TextField,
          {
            label: "B2B date available message",
            id: "b2b_date_available_message",
            value: b2bDateAvailableMessage,
            onChange: handleTextFieldChange,
            helpText: "Do not remove or modify '#date_available_description#'.",
            autoComplete: "off"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 190,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.TextField,
          {
            label: "B2B processing time message",
            id: "b2b_processing_time_message",
            value: b2bProcessingTimeMessage,
            onChange: handleTextFieldChange,
            helpText: "Do not remove or modify '#processing_time_description#'.",
            autoComplete: "off"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 198,
            columnNumber: 12
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Button, { submit: !0, children: "Save settings" }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 207,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 133,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 215,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris4.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_polaris4.Link,
          {
            url: "https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav",
            target: "_blank",
            removeUnderline: !0,
            children: "App nav best practices"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.settings.jsx",
            lineNumber: 220,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 219,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 218,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 214,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 213,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 212,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.settings.jsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}

// app/routes/app.updates2.mjs
var app_updates2_exports = {};
__export(app_updates2_exports, {
  updates2: () => updates2
});
async function updates2() {
  console.log("here");
}

// app/routes/app.updates.jsx
var app_updates_exports = {};
__export(app_updates_exports, {
  action: () => action3,
  default: () => Updates,
  loader: () => loader4
});
var import_react15 = require("@remix-run/react"), import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  let updateData = await fetchUpdates();
  return (0, import_node7.json)({ updateData });
}, action3 = async ({ request }) => {
  let updates = await dbUpdateRecord();
  return console.log("updates", updates), (0, import_node7.json)({ updates });
};
function Updates() {
  let submit = (0, import_react15.useSubmit)(), handleClick = () => {
    submit({}, { method: "post" });
  }, loadData = (0, import_react15.useLoaderData)(), actionData = (0, import_react15.useActionData)();
  console.log("actionData", actionData);
  let { updateData } = loadData;
  return console.log("updateData", updateData), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "Updated", children: [
    "Updates",
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { onClick: handleClick, children: "Update" }, void 0, !1, {
      fileName: "app/routes/app.updates.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.updates.jsx",
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

// app/routes/qrcodes.$id.jsx
var qrcodes_id_exports = {};
__export(qrcodes_id_exports, {
  default: () => QRCode,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_react16 = require("@remix-run/react"), import_db6 = __toESM(require_db_server());
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  (0, import_tiny_invariant3.default)(params.id, "Could not find QR code destination");
  let id = Number(params.id), qrCode = await import_db6.default.qRCode.findFirst({ where: { id } });
  return (0, import_tiny_invariant3.default)(qrCode, "Could not find QR code destination"), (0, import_node8.json)({
    title: qrCode.title,
    image: await getQRCodeImage(id)
  });
};
function QRCode() {
  let { image, title } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: title }, void 0, !1, {
      fileName: "app/routes/qrcodes.$id.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: image, alt: "QR Code for product" }, void 0, !1, {
      fileName: "app/routes/qrcodes.$id.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/qrcodes.$id.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action4,
  default: () => Index
});
var import_node9 = require("@remix-run/node"), import_react19 = require("@remix-run/react");
var import_react20 = require("react");

// app/utils/msbdFunctions.js
function generateShipMessage(variantData, settings) {
  let buffer = parseInt(settings.buffer), dtcProcessingTimeMessage = settings.dtcProcessingTimeMessage, dtcDateAvailableMessage = settings.dtcDateAvailableMessage, b2bProcessingTimeMessage = settings.b2bProcessingTimeMessage, b2bDateAvailableMessage = settings.b2bDateAvailableMessage, dtcDefaultShippingRange = parseInt(settings.dtcDefaultShippingRange), b2bDefaultShippingRange = parseInt(settings.b2bDefaultShippingRange), message = "", shippingProcessingMessage = "";
  if (variantData.overrideMessage !== "")
    shippingProcessingMessage = variantData.overrideMessage;
  else {
    let processingTimeDifference = parseInt(variantData.processingTime), b2b_product = variantData.b2bProduct, date = new Date(variantData.dateAvailable), bufferDays = buffer == 0 ? 0 : parseInt(buffer * 7 / 5), hours = Math.floor(date.getTimezoneOffset() / 60);
    hours !== 0 && hours > 0 && date.setDate(date.getDate() + 1), date.setDate(date.getDate() + bufferDays);
    let dateDifference = Math.ceil(parseFloat((new Date(date) - /* @__PURE__ */ new Date()) / (1e3 * 3600 * 24))), daysUntilAvailable = dateDifference > processingTimeDifference ? dateDifference : processingTimeDifference, weeksUntilAvailable = Math.round(daysUntilAvailable / 7);
    if (dateDifference > processingTimeDifference) {
      let nextMonday = date, monthNames = [
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
      let nth = function(d) {
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
      }, dateAvailableDescription = `the week of ${monthNames[nextMonday.getMonth()]} ${nth(nextMonday.getDate())}`;
      b2b_product ? (message = b2bDateAvailableMessage, shippingProcessingMessage = message.replace("#date_available_description#", dateAvailableDescription)) : (message = dtcDateAvailableMessage, shippingProcessingMessage = message.replace("#date_available_description#", dateAvailableDescription));
    } else if (b2b_product) {
      let range = b2bDefaultShippingRange, processingTimeDescription = `in ${weeksUntilAvailable > 1 && weeksUntilAvailable > range ? weeksUntilAvailable - range : 1}-${weeksUntilAvailable > 1 ? weeksUntilAvailable + range : 1 + range * 2} weeks`;
      message = b2bProcessingTimeMessage, shippingProcessingMessage = message.replace("#processing_time_description#", processingTimeDescription);
    } else {
      let range = dtcDefaultShippingRange, processingTimeDescription = `in ${daysUntilAvailable > 1 && daysUntilAvailable > range ? daysUntilAvailable - range : 1}-${daysUntilAvailable > 1 ? daysUntilAvailable + range : 1 + range * 2} business days`;
      message = dtcProcessingTimeMessage, shippingProcessingMessage = message.replace("#processing_time_description#", processingTimeDescription);
    }
  }
  return shippingProcessingMessage;
}
function returnCurrentShipDateStrings(currentData, settings) {
  let currentShipDateStrings = {};
  for (let [key, value] of Object.entries(currentData)) {
    let shipMessage = generateShipMessage(JSON.parse(value), settings);
    currentShipDateStrings[`${key}`] = shipMessage;
  }
  return currentShipDateStrings;
}

// app/utils/productFetchHelpers.js
var import_axios = __toESM(require("axios")), import_node_readline = require("node:readline");
async function fetchProductsFromUrl(url) {
  let response = await import_axios.default.get(`${url}`, {
    responseType: "stream"
  }), rl = (0, import_node_readline.createInterface)({
    input: response.data
  }), object = {}, index = 0;
  for await (let line of rl)
    object[`${index}`] = JSON.parse(line), index++;
  return object;
}
async function startBulkOperation(admin) {
  let response = await admin.graphql(`
    mutation {
      bulkOperationRunQuery(
       query: """
        {
          products {
            edges {
              node {
                id
                title
                handle
                tags
                variants {
                    edges {
                        node {
                            id
                            title
                            metafields {
                                edges {
                                    node {
                                        key
                                        value
                                        id
                                    }
                                }
                            }
                        }
                    }
                }
              }
            }
          }
        }
        """
      ) {
        bulkOperation {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }
    `), {
    data: {
      bulkOperationRunQuery: { bulkOperation }
    }
  } = await response.json();
  return bulkOperation;
}
var poll = async function(fn, fnCondition, ms) {
  let result = await fn();
  for (; fnCondition(result); )
    await wait(ms), result = await fn();
  return result;
}, wait = function(ms = 1e3) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}, validate = function(result) {
  return result.data.node.url === null;
};
async function fetchBulkOperationData(bulkOperation, admin) {
  async function helper() {
    return await (await admin.graphql(`
            query {
            node(id: "${bulkOperation.id}") {
              ... on BulkOperation {
                url
                partialDataUrl
              }
            }
          }
        `)).json();
  }
  return await poll(helper, validate, 1e3);
}

// app/components/ProductsView.jsx
var import_polaris5 = require("@shopify/polaris");
var import_react17 = require("react"), import_react18 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ProductsView() {
  let { dbProductsFormatted } = (0, import_react17.useContext)(MyContext), [pageLimit, setPageLimit] = (0, import_react17.useState)(25), [currentPage, setCurrentPage] = (0, import_react17.useState)(1), [sortValue, setSortValue] = (0, import_react17.useState)("DATE_MODIFIED_DESC"), indexOfLastPost = currentPage * pageLimit, indexOfFirstItem = indexOfLastPost - pageLimit, [currentItems, setCurrentItems] = (0, import_react17.useState)(Object.entries(dbProductsFormatted).slice(indexOfFirstItem, indexOfLastPost));
  (0, import_react17.useEffect)(() => {
    let indexOfLastPost2 = currentPage * pageLimit, indexOfFirstItem2 = indexOfLastPost2 - pageLimit;
    setCurrentItems(Object.entries(dbProductsFormatted).slice(indexOfFirstItem2, indexOfLastPost2));
  }, [currentPage]);
  function onNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function onPreviousPage() {
    setCurrentPage(currentPage - 1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris5.Pagination,
      {
        hasPrevious: indexOfFirstItem !== 0,
        onPrevious: () => {
          onPreviousPage();
        },
        hasNext: Object.entries(dbProductsFormatted).length - pageLimit * currentPage > 0,
        onNext: () => {
          onNextPage();
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductsView.jsx",
        lineNumber: 41,
        columnNumber: 11
      },
      this
    ),
    currentItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris5.ResourceList,
      {
        resourceName: { singular: "product", plural: "products" },
        items: currentItems,
        renderItem: (item) => {
          let id = item[0].split("/Product/").pop(), title = Object.entries(item[1])[0][1].title.split("-")[0], url = `products/${id}`;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            import_polaris5.ResourceItem,
            {
              id,
              url,
              accessibilityLabel: `View details for ${title}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris5.Text, { variant: "bodyMd", fontWeight: "bold", as: "h3", children: title }, void 0, !1, {
                fileName: "app/components/ProductsView.jsx",
                lineNumber: 59,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProductsView.jsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          );
        },
        showHeader: !0,
        totalItemsCount: dbProductsFormatted ? Object.entries(dbProductsFormatted).length : 50
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductsView.jsx",
        lineNumber: 46,
        columnNumber: 42
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris5.Pagination,
      {
        hasPrevious: indexOfFirstItem !== 0,
        onPrevious: () => {
          onPreviousPage();
        },
        hasNext: Object.entries(dbProductsFormatted).length - pageLimit * currentPage > 0,
        onNext: () => {
          onNextPage();
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductsView.jsx",
        lineNumber: 71,
        columnNumber: 16
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ProductsView.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

// app/routes/app._index.jsx
var import_polaris6 = require("@shopify/polaris"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
async function action4({ request, params }) {
  let { admin } = await shopify_server_default.authenticate.admin(request), [bulkOperation] = await Promise.all([
    startBulkOperation(admin)
  ]), url = await fetchBulkOperationData(bulkOperation, admin), products = await fetchProductsFromUrl(url.data.node.url), data = await request.formData(), array = [], submission_type = "", settings = {}, dbShipDateData = {}, type = "", currentProductDataArray = [];
  for (var pair of data.entries())
    JSON.parse(pair[1]).submission_type && (submission_type = JSON.parse(pair[1]).submission_type), JSON.parse(pair[1]).settings && (settings = JSON.parse(pair[1]).settings), JSON.parse(pair[1]).db_products && (dbShipDateData = JSON.parse(pair[1]).db_products), JSON.parse(pair[1]).type && (type = JSON.parse(pair[1]).type), !JSON.parse(pair[1]).submission_type && !JSON.parse(pair[1]).settings && !JSON.parse(pair[1]).db_products && !JSON.parse(pair[1]).type && currentProductDataArray.push(JSON.parse(pair[1]));
  let formattedProducts = formatBulkDataOperationJSON(products), currentProductsDataAllObject = formatCurrentProductData(formattedProducts, settings), currentProductsArray = [];
  for (let [key, value] of Object.entries(currentProductsDataAllObject))
    currentProductsArray.push(JSON.parse(value));
  let dbShipDateStrings = returnDBShipDateStrings(dbShipDateData), currentShipDateStrings = returnCurrentShipDateStrings(currentProductsDataAllObject, settings), metafieldIds = returnMetafieldIds(currentProductsDataAllObject), variantsToUpdateShipDateStrings = returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings), numberToUpdate = variantsToUpdateShipDateStrings == {} ? 0 : Object.entries(variantsToUpdateShipDateStrings).length, numberLeftToUpdate = variantsToUpdateShipDateStrings == {} || Object.entries(variantsToUpdateShipDateStrings).length - 10 < 0 ? 0 : Object.entries(variantsToUpdateShipDateStrings).length - 10, currentProductsArrayDifferences = returnCurrentProductsArrayDifferences(currentProductsArray, dbShipDateData);
  if (submission_type == "update_db") {
    currentProductsArrayDifferences.length > 0 && await dbUpdate(currentProductsArrayDifferences);
    let updatedDbProducts = await fetchDBShipDateData();
    return (0, import_node9.json)({
      currentProductsDataAllObject,
      currentProductsArray,
      numberToUpdate,
      numberLeftToUpdate,
      submission_type,
      updatedDbProducts,
      type,
      currentProductsArrayDifferences,
      currentProductDataArray,
      dbShipDateData
    });
  } else if (submission_type == "update_metafields") {
    for (let [key, value] of Object.entries(variantsToUpdateShipDateStrings))
      array.push(JSON.parse(value));
    let mfUpdate = await metafieldsUpdate(array, admin, metafieldIds);
    return (0, import_node9.json)({
      formattedProducts,
      currentProductsDataAllObject,
      dbShipDateStrings,
      currentShipDateStrings,
      variantsToUpdateShipDateStrings,
      submission_type,
      settings,
      array,
      dbShipDateData,
      mfUpdate,
      metafieldIds,
      // dbUpdateToken,
      numberLeftToUpdate,
      numberToUpdate,
      type,
      currentProductDataArray
    });
  }
  return (0, import_node9.redirect)("/app/variantshipdatedata");
}
function Index() {
  let { dbProducts, setDbProducts } = (0, import_react20.useContext)(MyContext), { settings, setSettings } = (0, import_react20.useContext)(MyContext), { updating, setUpdating } = (0, import_react20.useContext)(MyContext), { amountToUpdate, setAmountToUpdate } = (0, import_react20.useContext)(MyContext), { amountLeftToUpdate, setAmountLeftToUpdate } = (0, import_react20.useContext)(MyContext), { percentageUpdated, setPercentageUpdated } = (0, import_react20.useContext)(MyContext), { state, formData } = (0, import_react19.useNavigation)(), submit = (0, import_react19.useSubmit)(), actionData = (0, import_react19.useActionData)();
  console.log("actionData", actionData), (0, import_react20.useEffect)(() => {
    if (actionData !== void 0)
      if (actionData.submission_type == "update_db" && setDbProducts(actionData.updatedDbProducts), actionData.numberToUpdate > 0 && actionData.numberLeftToUpdate > 0) {
        setUpdating(!0);
        let percentageUpdatedAmount = 0;
        percentageUpdatedAmount = parseInt(100 * ((parseInt(amountToUpdate) - parseInt(actionData.numberLeftToUpdate)) / parseInt(amountToUpdate))), actionData.type == "click" && (percentageUpdatedAmount = parseInt(100 * ((parseInt(actionData.numberToUpdate) - parseInt(actionData.numberLeftToUpdate)) / parseInt(actionData.numberToUpdate))), setAmountToUpdate(actionData.numberToUpdate)), setAmountLeftToUpdate(actionData.numberLeftToUpdate), setPercentageUpdated(percentageUpdatedAmount), actionData.submission_type == "update_db" ? handleUpdateMetafieldsClick() : actionData.submission_type == "update_metafields" && handleUpdateDataBaseClick();
      } else
        setUpdating(!1), setAmountToUpdate(0), setAmountLeftToUpdate(0), setPercentageUpdated(100);
  }, [actionData]);
  function handleUpdateMetafieldsClick(type) {
    setUpdating(!0), type == "click" && setPercentageUpdated(0);
    let submission = {};
    submission.settings = JSON.stringify({ settings: settings[0] }), submission.submission_type = JSON.stringify({ submission_type: "update_metafields" }), submission.db_products = JSON.stringify({ db_products: dbProducts }), type == "click" ? submission.type = JSON.stringify({ type: "click" }) : submission.type = JSON.stringify({ type: "auto" }), submit(submission, { method: "post" });
  }
  function handleUpdateDataBaseClick() {
    let submission = {};
    submission.submission_type = JSON.stringify({ submission_type: "update_db" }), submission.settings = JSON.stringify({ settings: settings[0] }), submission.db_products = JSON.stringify({ db_products: dbProducts }), submit(submission, { method: "post" });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Page, { fullWidth: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Layout.Section, { variant: "twoThirds", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Card, { title: "Products", sectioned: !0, children: [
      amountLeftToUpdate > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
        amountLeftToUpdate,
        " / ",
        amountToUpdate
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 207,
        columnNumber: 40
      }, this),
      Object.keys(dbProducts).length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ProductsView, {}, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 210,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "Nothing here!" }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 211,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 205,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 204,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Card, { title: "Actions", sectioned: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Button, { size: "large", onClick: () => handleUpdateDataBaseClick(), children: "Update Products Database" }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 217,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.Button, { size: "large", onClick: () => handleUpdateMetafieldsClick("click"), children: "Update Product Metafields" }, void 0, !1, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 218,
        columnNumber: 13
      }, this),
      updating && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: { width: 225 }, children: [
        percentageUpdated,
        "%",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris6.ProgressBar, { progress: percentageUpdated }, void 0, !1, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 219,
          columnNumber: 72
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 219,
        columnNumber: 26
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 216,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 215,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 203,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 202,
    columnNumber: 7
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action5,
  default: () => Auth,
  links: () => links,
  loader: () => loader6
});
var import_react21 = require("react"), import_node10 = require("@remix-run/node"), import_polaris7 = require("@shopify/polaris"), import_react22 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-XBXYCZPP.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader6 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node10.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action5 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node10.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react22.useLoaderData)(), actionData = (0, import_react22.useActionData)(), [shop, setShop] = (0, import_react21.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris7.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris7.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris7.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react22.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris7.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris7.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 48,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_polaris7.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 51,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_polaris7.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 61,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action6
});
var import_db7 = __toESM(require_db_server()), action6 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(
    request
  );
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await import_db7.default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader7
});
var import_node11 = require("@remix-run/node"), import_react23 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader7 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node11.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node11.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader8
});
var loader8 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader9
});
var import_node12 = require("@remix-run/node"), import_react24 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react25 = require("@shopify/shopify-app-remix/react");
var import_react26 = require("react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }], loader9 = async ({ request }) => {
  await authenticate.admin(request);
  let [dataBaseProducts, settingsData] = await Promise.all(
    [
      fetchDBShipDateData(),
      fetchSettings()
    ]
  );
  return (0, import_node12.json)({ apiKey: process.env.SHOPIFY_API_KEY || "", dataBaseProducts, settingsData });
};
function App3() {
  let { setSettings } = (0, import_react26.useContext)(MyContext), { setDbProducts } = (0, import_react26.useContext)(MyContext), { setDbProductsFormatted } = (0, import_react26.useContext)(MyContext), loadData = (0, import_react24.useLoaderData)(), { apiKey, dataBaseProducts, settingsData } = loadData;
  return console.log("dataBaseProducts", dataBaseProducts), (0, import_react26.useEffect)(() => {
    setDbProducts(dataBaseProducts), setSettings(settingsData), setDbProductsFormatted(formatDbProducts(dataBaseProducts));
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react25.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Link, { to: "/app/settings", children: "Settings" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react24.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react24.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WZDGTS7Y.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-I4PN5TTX.js", "/build/_shared/chunk-DYYXLKDN.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NTDZHFUT.js", imports: ["/build/_shared/chunk-KP4DVPAH.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WDDXKXJK.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-AU5YQBQW.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-2MOAIH4J.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-C3NP7DHP.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-6FWHY3LN.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-NDU3ARYO.js", imports: ["/build/_shared/chunk-GU2ZEMMZ.js", "/build/_shared/chunk-KP4DVPAH.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/app.product.$id.variants.$variantId": { id: "routes/app.product.$id.variants.$variantId", parentId: "routes/app", path: "product/:id/variants/:variantId", index: void 0, caseSensitive: void 0, module: "/build/routes/app.product.$id.variants.$variantId-327FB2IT.js", imports: ["/build/_shared/chunk-KP4DVPAH.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/app.products.$id": { id: "routes/app.products.$id", parentId: "routes/app", path: "products/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.products.$id-OKJQLE5V.js", imports: ["/build/_shared/chunk-KP4DVPAH.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/app.qrcodes.$id": { id: "routes/app.qrcodes.$id", parentId: "routes/app", path: "qrcodes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.qrcodes.$id-M6NJDXQS.js", imports: ["/build/_shared/chunk-DXZPNPAJ.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.settings": { id: "routes/app.settings", parentId: "routes/app", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/app.settings-NGYXTA75.js", imports: ["/build/_shared/chunk-GU2ZEMMZ.js", "/build/_shared/chunk-KP4DVPAH.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.updates": { id: "routes/app.updates", parentId: "routes/app", path: "updates", index: void 0, caseSensitive: void 0, module: "/build/routes/app.updates-BKOFM6PA.js", imports: ["/build/_shared/chunk-GU2ZEMMZ.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.updates2": { id: "routes/app.updates2", parentId: "routes/app", path: "updates2", index: void 0, caseSensitive: void 0, module: "/build/routes/app.updates2-WADJZ2PX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-PKGPWYZS.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-6FWHY3LN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/qrcodes.$id": { id: "routes/qrcodes.$id", parentId: "root", path: "qrcodes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.$id-6ED4I2UC.js", imports: ["/build/_shared/chunk-DXZPNPAJ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/qrcodes.$id.scan": { id: "routes/qrcodes.$id.scan", parentId: "routes/qrcodes.$id", path: "scan", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.$id.scan-2CY3SXY7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "4003e3d4", hmr: { runtime: "/build/_shared/chunk-DYYXLKDN.js", timestamp: 1700734795808 }, url: "/build/manifest-4003E3D4.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.product.$id.variants.$variantId": {
    id: "routes/app.product.$id.variants.$variantId",
    parentId: "routes/app",
    path: "product/:id/variants/:variantId",
    index: void 0,
    caseSensitive: void 0,
    module: app_product_id_variants_variantId_exports
  },
  "routes/app.products.$id": {
    id: "routes/app.products.$id",
    parentId: "routes/app",
    path: "products/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_products_id_exports
  },
  "routes/qrcodes.$id.scan": {
    id: "routes/qrcodes.$id.scan",
    parentId: "routes/qrcodes.$id",
    path: "scan",
    index: void 0,
    caseSensitive: void 0,
    module: qrcodes_id_scan_exports
  },
  "routes/app.qrcodes.$id": {
    id: "routes/app.qrcodes.$id",
    parentId: "routes/app",
    path: "qrcodes/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_qrcodes_id_exports
  },
  "routes/app.settings": {
    id: "routes/app.settings",
    parentId: "routes/app",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: app_settings_exports
  },
  "routes/app.updates2": {
    id: "routes/app.updates2",
    parentId: "routes/app",
    path: "updates2",
    index: void 0,
    caseSensitive: void 0,
    module: app_updates2_exports
  },
  "routes/app.updates": {
    id: "routes/app.updates",
    parentId: "routes/app",
    path: "updates",
    index: void 0,
    caseSensitive: void 0,
    module: app_updates_exports
  },
  "routes/qrcodes.$id": {
    id: "routes/qrcodes.$id",
    parentId: "root",
    path: "qrcodes/:id",
    index: void 0,
    caseSensitive: void 0,
    module: qrcodes_id_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
