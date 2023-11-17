var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-10");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var shopify = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
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
          lineNumber: 23,
          columnNumber: 7
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
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.variantshipdatedata.jsx
var app_variantshipdatedata_exports = {};
__export(app_variantshipdatedata_exports, {
  action: () => action,
  default: () => variantShipDataDataList,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/models/variantShipDateData.server.js
async function fetchDBShipDateData() {
  return await db_server_default.variantShipDateData.findMany();
}
async function fetchSettings() {
  return await db_server_default.settings.findMany();
}

// app/routes/app.variantshipdatedata.jsx
var import_react7 = require("react");

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
      dataBaseUpdateObject.processingTime = variant.processing_time ? variant.processing_time : `${defaultProcessingTime}`, dataBaseUpdateObject.dateAvailable = variant.date_available ? variant.date_available : `${currentDateString}`, dataBaseUpdateObject.overrideMessage = variant.shipping ? variant.shipping : "", dataBaseUpdateObject.bundleProducts = variant.bundle_products ? variant.bundle_products : "", dataBaseUpdateObject.shipDateMessage = variant.ship_date_string ? variant.ship_date_string : "", dataBaseObjectAllProducts[`${variant.id}`] = JSON.stringify(dataBaseUpdateObject);
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
      formattedProducts[`${parentProductId}`].variants[`${value.__parentId}`][`${value.key}`] = value.value;
    }
  return formattedProducts;
}

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

// app/utils/updateFunctions.jsx
async function metafieldUpdateGraphQL(variantId, variantShippingMessage, admin) {
  let response = await admin.graphql(`
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
`), {
    data: {
      productVariantUpdate: { product }
    }
  } = await response.json();
  return product;
}
async function metafieldsUpdate(array, admin) {
  let updates = [], promises = array.map((arrayRow) => {
    let variantId = Object.keys(arrayRow)[0].split("/ProductVariant/").pop(), variantShippingMessage = Object.values(arrayRow)[0], product = metafieldUpdateGraphQL(variantId, variantShippingMessage, admin);
    updates.push(product);
  });
  return await Promise.all(promises), updates;
}
async function dbUpdate(array) {
  let currentTime = /* @__PURE__ */ new Date(), promises = array.map(({ productVariantId, processingTime, dateAvailable, productId, productHandle, title, b2bProduct, bundleProduct, overrideMessage, shipDateMessage }) => db_server_default.variantShipDateData.upsert(
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
        shipDateMessage
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
        updated: currentTime
      }
    }
  ));
  await Promise.all(promises);
}
async function settingsUpdate(data) {
  let { buffer, defaultProcessingTime, dtcDateAvailableMessage, dtcProcessingTimeMessage, dtcDefaultShippingRange, b2bDefaultShippingRange, b2bDateAvailableMessage, b2bProcessingTimeMessage } = data;
  await db_server_default.settings.update({
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

// app/routes/app.variantshipdatedata.jsx
var import_axios = __toESM(require("axios")), import_node_readline = require("node:readline");

// app/MyContext.jsx
var import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), MyContext = (0, import_react3.createContext)(), MyContextProvider = ({ children }) => {
  let [sharedState, setSharedState] = (0, import_react3.useState)("Initial value"), [buffer, setBuffer] = (0, import_react3.useState)(5), [defaultProcessingTime, setDefaultProcessingTime] = (0, import_react3.useState)(1), [dtcDefaultShippingRange, setDtcDefaultShippingRange] = (0, import_react3.useState)(1), [b2bDefaultShippingRange, setB2bDefaultShippingRange] = (0, import_react3.useState)(1), [dtcDateAvailableMessage, setDtcDateAvailableMessage] = (0, import_react3.useState)("Ships for free #date_available_description#"), [dtcProcessingTimeMessage, setDtcProcessingTimeMessage] = (0, import_react3.useState)("Ships for free #processing_time_description#"), [b2bDateAvailableMessage, setB2bDateAvailableMessage] = (0, import_react3.useState)("Ships with white glove installation #date_available_description#"), [b2bProcessingTimeMessage, setB2bProcessingTimeMessage] = (0, import_react3.useState)("Ships with white glove installation #processing_time_description#"), [allProducts, setAllProducts] = (0, import_react3.useState)({});
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MyContext.Provider, { value: {
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
    setAllProducts
  }, children }, void 0, !1, {
    fileName: "app/MyContext.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/components/ProductsView.jsx
var import_polaris = require("@shopify/polaris");
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ProductsView() {
  let { allProducts, setAllProducts } = (0, import_react4.useContext)(MyContext), [pageLimit, setPageLimit] = (0, import_react4.useState)(25), [currentPage, setCurrentPage] = (0, import_react4.useState)(1), indexOfLastPost = currentPage * pageLimit, indexOfFirstItem = indexOfLastPost - pageLimit;
  console.log(indexOfLastPost, indexOfFirstItem, Object.entries(allProducts));
  let [currentItems, setCurrentItems] = (0, import_react4.useState)(Object.entries(allProducts).slice(indexOfFirstItem, indexOfLastPost));
  console.log("currentItems", currentItems), (0, import_react4.useEffect)(() => {
    let indexOfLastPost2 = currentPage * pageLimit, indexOfFirstItem2 = indexOfLastPost2 - pageLimit;
    setCurrentItems(Object.entries(allProducts).slice(indexOfFirstItem2, indexOfLastPost2));
  }, [currentPage]);
  function onNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function onPreviousPage() {
    setCurrentPage(currentPage - 1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    currentItems.map((currentItem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: `/app/products/${currentItem[1].id.split("/Product/").pop()}`, children: currentItem[1].title }, void 0, !1, {
      fileName: "app/components/ProductsView.jsx",
      lineNumber: 40,
      columnNumber: 32
    }, this) }, index, !1, {
      fileName: "app/components/ProductsView.jsx",
      lineNumber: 40,
      columnNumber: 16
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris.Pagination,
      {
        hasPrevious: indexOfFirstItem !== 0,
        onPrevious: () => {
          onPreviousPage();
        },
        hasNext: Object.entries(allProducts).length - pageLimit * currentPage > 0,
        onNext: () => {
          onNextPage();
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductsView.jsx",
        lineNumber: 43,
        columnNumber: 16
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ProductsView.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

// app/routes/app.variantshipdatedata.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
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
  return console.log("response", response), bulkOperation;
}
async function fetchDbProducts() {
  return fetchDBShipDateData();
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
async function fetchProductsFromUrl(url) {
  var cleanedUrl = url.replace(/\n|\r|\s/g, "");
  let response = await import_axios.default.get(`${url}`, {
    responseType: "stream"
  }), rl = (0, import_node_readline.createInterface)({
    input: response.data
  }), object = {}, index = 0;
  for await (let line of rl)
    object[`${index}`] = JSON.parse(line), index++;
  return object;
}
async function loader({ request }) {
  let { admin } = await shopify_server_default.authenticate.admin(request), [bulkOperation, dbProducts, settings] = await Promise.all([
    startBulkOperation(admin),
    fetchDbProducts(),
    fetchSettings()
  ]), url = await fetchBulkOperationData(bulkOperation, admin), products = await fetchProductsFromUrl(url.data.node.url);
  return (0, import_node3.json)({ bulkOperation, dbProducts, url, products, settings });
}
async function action({ request, params }) {
  let { admin } = await shopify_server_default.authenticate.admin(request), data = await request.formData(), array = [], submission_type = "";
  for (var pair of data.entries())
    JSON.parse(pair[1]).submission_type ? submission_type = JSON.parse(pair[1]).submission_type : array.push(JSON.parse(pair[1]));
  return submission_type == "update_db" ? await dbUpdate(array) : submission_type == "update_metafields" && await metafieldsUpdate(array, admin), (0, import_node3.redirect)("/app/variantshipdatedata");
}
function variantShipDataDataList() {
  (0, import_react7.useEffect)(() => {
  }, []);
  let loadData = (0, import_react6.useLoaderData)(), [currentOffset, setCurrentOffset] = (0, import_react7.useState)(0), { allProducts, setAllProducts } = (0, import_react7.useContext)(MyContext), dbShipDateData = loadData.dbProducts, settings = loadData.settings[0], products = loadData.products;
  (0, import_react7.useEffect)(() => {
    setAllProducts(formattedProducts);
  }, []);
  let formattedProducts = formatBulkDataOperationJSON(products), dataBaseObjectAllProducts = formatCurrentProductData(formattedProducts, settings), dbShipDateStrings = returnDBShipDateStrings(dbShipDateData), currentShipDateStrings = returnCurrentShipDateStrings(dataBaseObjectAllProducts, settings), variantsToUpdateShipDateStrings = returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings);
  console.log("products", formattedProducts);
  let submit = (0, import_react6.useSubmit)();
  function handleUpdateMetafieldsClick() {
    variantsToUpdateShipDateStrings.submission_type = JSON.stringify({ submission_type: "update_metafields" });
    let formData = new FormData();
    Object.keys(variantsToUpdateShipDateStrings).forEach((key) => {
      typeof variantsToUpdateShipDateStrings[key] != "object" ? formData.append(key, variantsToUpdateShipDateStrings[key]) : formData.append(key, JSON.stringify(variantsToUpdateShipDateStrings[key]));
    });
    let array = [], submission_type = "";
    for (var pair of formData.entries())
      JSON.parse(pair[1]).submission_type ? submission_type = JSON.parse(pair[1]).submission_type : array.push(JSON.parse(pair[1]));
    array.length > 0 && submit(variantsToUpdateShipDateStrings, { method: "post" });
  }
  function handleUpdateDataBaseClick() {
    dataBaseObjectAllProducts.submission_type = JSON.stringify({ submission_type: "update_db" }), submit(dataBaseObjectAllProducts, { method: "post" });
  }
  return console.log("allProducts", allProducts), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: () => handleUpdateDataBaseClick(), children: "Submit" }, void 0, !1, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 263,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: () => handleUpdateMetafieldsClick(variantsToUpdateShipDateStrings), children: "Update metafields" }, void 0, !1, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 264,
      columnNumber: 13
    }, this),
    Object.keys(allProducts).length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductsView, {}, void 0, !1, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 266,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Nothing here!" }, void 0, !1, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 267,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.variantshipdatedata.jsx",
    lineNumber: 262,
    columnNumber: 9
  }, this);
}

// app/routes/app.products.$id.jsx
var app_products_id_exports = {};
__export(app_products_id_exports, {
  default: () => ProductPage
});
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ProductPage() {
  let params = (0, import_react8.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: [
    "A Blog Post titled ",
    params.id
  ] }, void 0, !0, {
    fileName: "app/routes/app.products.$id.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

// app/routes/qrcodes.$id.scan.jsx
var qrcodes_id_scan_exports = {};
__export(qrcodes_id_scan_exports, {
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/QRCode.server.js
var import_qrcode = __toESM(require("qrcode")), import_tiny_invariant = __toESM(require("tiny-invariant"));
async function getQRCode(id, graphql) {
  let qrCode = await db_server_default.qRCode.findFirst({ where: { id } });
  return qrCode ? supplementQRCode(qrCode, graphql) : null;
}
async function getQRCodes(shop, graphql) {
  let qrCodes = await db_server_default.qRCode.findMany({
    where: { shop },
    orderBy: { id: "desc" }
  });
  return qrCodes.length === 0 ? [] : Promise.all(
    qrCodes.map((qrCode) => supplementQRCode(qrCode, graphql))
  );
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
var loader2 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.id, "Could not find QR code destination");
  let id = Number(params.id), qrCode = await db_server_default.qRCode.findFirst({ where: { id } });
  return (0, import_tiny_invariant2.default)(qrCode, "Could not find QR code destination"), await db_server_default.qRCode.update({
    where: { id },
    data: { scans: { increment: 1 } }
  }), (0, import_node4.redirect)(getDestinationUrl(qrCode));
};

// app/routes/app.qrcodes.$id.jsx
var app_qrcodes_id_exports = {};
__export(app_qrcodes_id_exports, {
  action: () => action2,
  default: () => QRCodeForm,
  loader: () => loader3
});
var import_react9 = require("react"), import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_polaris2 = require("@shopify/polaris"), import_polaris_icons = require("@shopify/polaris-icons");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  let { admin } = await authenticate.admin(request);
  return params.id === "new" ? (0, import_node5.json)({
    destination: "product",
    title: ""
  }) : (0, import_node5.json)(await getQRCode(Number(params.id), admin.graphql));
}
async function action2({ request, params }) {
  let { session } = await authenticate.admin(request), { shop } = session, data = {
    ...Object.fromEntries(await request.formData()),
    shop
  };
  if (data.action === "delete")
    return await db_server_default.qRCode.delete({ where: { id: Number(params.id) } }), (0, import_node5.redirect)("/app");
  let errors = validateQRCode(data);
  if (errors)
    return (0, import_node5.json)({ errors }, { status: 422 });
  let qrCode = params.id === "new" ? await db_server_default.qRCode.create({ data }) : await db_server_default.qRCode.update({ where: { id: Number(params.id) }, data });
  return (0, import_node5.redirect)(`/app/qrcodes/${qrCode.id}`);
}
function QRCodeForm() {
  let errors = (0, import_react10.useActionData)()?.errors || {}, qrCode = (0, import_react10.useLoaderData)(), [formState, setFormState] = (0, import_react9.useState)(qrCode), [cleanFormState, setCleanFormState] = (0, import_react9.useState)(qrCode), isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState), nav = (0, import_react10.useNavigation)(), isSaving = nav.state === "submitting" && nav.formData?.get("action") !== "delete", isDeleting = nav.state === "submitting" && nav.formData?.get("action") === "delete", navigate = (0, import_react10.useNavigate)();
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
  let submit = (0, import_react10.useSubmit)();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ui-title-bar", { title: qrCode.id ? "Edit QR code" : "Create new QR code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { variant: "breadcrumb", onClick: () => navigate("/app"), children: "QR codes" }, void 0, !1, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 130,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Text, { as: "h2", variant: "headingLg", children: "Title" }, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 139,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_polaris2.TextField,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.InlineStack, { align: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Text, { as: "h2", variant: "headingLg", children: "Product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 157,
              columnNumber: 19
            }, this),
            formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Button, { variant: "plain", onClick: selectProduct, children: "Change product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 161,
              columnNumber: 21
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 156,
            columnNumber: 17
          }, this),
          formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.InlineStack, { blockAlign: "center", gap: "500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_polaris2.Thumbnail,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Text, { as: "span", variant: "headingMd", fontWeight: "semibold", children: formState.productTitle }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 172,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 167,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.BlockStack, { gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Button, { onClick: selectProduct, id: "select-product", children: "Select product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 178,
              columnNumber: 21
            }, this),
            errors.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_polaris2.InlineError,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Bleed, { marginInlineStart: "200", marginInlineEnd: "200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Divider, {}, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 190,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 189,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.InlineStack, { gap: "500", align: "space-between", blockAlign: "start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_polaris2.ChoiceList,
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
            qrCode.destinationUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_polaris2.Button,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Text, { as: "h2", variant: "headingLg", children: "QR code" }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        qrCode ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.EmptyState, { image: qrCode.image, imageContained: !0 }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 231,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.EmptyState, { image: "", children: "Your QR code will appear here after you save" }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 233,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.BlockStack, { gap: "300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_polaris2.Button,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_polaris2.Button,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_polaris2.PageActions,
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
  action: () => action3,
  default: () => SettingsPage,
  loader: () => loader4
});
var import_polaris3 = require("@shopify/polaris"), import_node6 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function action3({ request, params }) {
  let data = await request.formData(), object = {};
  for (var pair of data.entries())
    object[`${pair[0]}`] = pair[1];
  return await settingsUpdate(object), (0, import_node6.redirect)("/app/settings");
}
async function loader4({ request }) {
  let settings = await fetchSettings();
  return (0, import_node6.json)({ settings });
}
function SettingsPage() {
  console.log("settings");
  let submit = (0, import_react11.useSubmit)(), settings = (0, import_react11.useLoaderData)().settings[0], { buffer, setBuffer } = (0, import_react12.useContext)(MyContext), { b2bDateAvailableMessage, setB2bDateAvailableMessage } = (0, import_react12.useContext)(MyContext), { b2bDefaultShippingRange, setB2bDefaultShippingRange } = (0, import_react12.useContext)(MyContext), { b2bProcessingTimeMessage, setB2bProcessingTimeMessage } = (0, import_react12.useContext)(MyContext), { defaultProcessingTime, setDefaultProcessingTime } = (0, import_react12.useContext)(MyContext), { dtcDateAvailableMessage, setDtcDateAvailableMessage } = (0, import_react12.useContext)(MyContext), { dtcDefaultShippingRange, setDtcDefaultShippingRange } = (0, import_react12.useContext)(MyContext), { dtcProcessingTimeMessage, setDtcProcessingTimeMessage } = (0, import_react12.useContext)(MyContext);
  (0, import_react12.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: [
      " ",
      buffer,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ui-title-bar", { title: "Settings page" }, void 0, !1, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Form, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.FormLayout, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.RangeSlider,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.RangeSlider,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.RangeSlider,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.RangeSlider,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.TextField,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.TextField,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.TextField,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.TextField,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Button, { submit: !0, children: "Save settings" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 215,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris3.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_polaris3.Link,
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

// app/routes/qrcodes.$id.jsx
var qrcodes_id_exports = {};
__export(qrcodes_id_exports, {
  default: () => QRCode,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  (0, import_tiny_invariant3.default)(params.id, "Could not find QR code destination");
  let id = Number(params.id), qrCode = await db_server_default.qRCode.findFirst({ where: { id } });
  return (0, import_tiny_invariant3.default)(qrCode, "Could not find QR code destination"), (0, import_node7.json)({
    title: qrCode.title,
    image: await getQRCodeImage(id)
  });
};
function QRCode() {
  let { image, title } = (0, import_react13.useLoaderData)();
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
  default: () => Index,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_polaris4 = require("@shopify/polaris");
var import_polaris_icons2 = require("@shopify/polaris-icons"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  let { admin, session } = await authenticate.admin(request), qrCodes = await getQRCodes(session.shop, admin.graphql);
  return (0, import_node8.json)({
    qrCodes
  });
}
var EmptyQRCodeState = ({ onAction }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  import_polaris4.EmptyState,
  {
    heading: "Create unique QR codes for your product",
    action: {
      content: "Create QR code",
      onAction
    },
    image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Allow customers to scan codes and buy products using their phones." }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 37,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 29,
    columnNumber: 3
  },
  this
);
function truncate(str, { length = 25 } = {}) {
  return str ? str.length <= length ? str : str.slice(0, length) + "\u2026" : "";
}
var QRTable = ({ qrCodes }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  import_polaris4.IndexTable,
  {
    resourceName: {
      singular: "QR code",
      plural: "QR codes"
    },
    itemCount: qrCodes.length,
    headings: [
      { title: "Thumbnail", hidden: !0 },
      { title: "Title" },
      { title: "Product" },
      { title: "Date created" },
      { title: "Scans" }
    ],
    selectable: !1,
    children: qrCodes.map((qrCode) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(QRTableRow, { qrCode }, qrCode.id, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this))
  },
  void 0,
  !1,
  {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 48,
    columnNumber: 3
  },
  this
), QRTableRow = ({ qrCode }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.IndexTable.Row, { id: qrCode.id, position: qrCode.id, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_polaris4.Thumbnail,
    {
      source: qrCode.productImage || import_polaris_icons2.ImageMajor,
      alt: qrCode.productTitle,
      size: "small"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 72,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 71,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Link, { to: `qrcodes/${qrCode.id}`, children: truncate(qrCode.title) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.IndexTable.Cell, { children: qrCode.productDeleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.InlineStack, { align: "start", gap: "200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { style: { width: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.Icon, { source: import_polaris_icons2.DiamondAlertMajor, tone: "critical" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 85,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.Text, { tone: "critical", as: "span", children: "product has been deleted" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 83,
    columnNumber: 9
  }, this) : truncate(qrCode.productTitle) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 81,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.IndexTable.Cell, { children: new Date(qrCode.createdAt).toDateString() }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.IndexTable.Cell, { children: qrCode.scans }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 98,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/app._index.jsx",
  lineNumber: 70,
  columnNumber: 3
}, this);
function Index() {
  let { qrCodes } = (0, import_react14.useLoaderData)(), navigate = (0, import_react14.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ui-title-bar", { title: "QR codes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { variant: "primary", onClick: () => navigate("/app/qrcodes/new"), children: "Create QR code" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris4.Card, { padding: "0", children: qrCodes.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(EmptyQRCodeState, { onAction: () => navigate("qrcodes/new") }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 117,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(QRTable, { qrCodes }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 119,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 115,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action4,
  default: () => Auth,
  links: () => links,
  loader: () => loader7
});
var import_react15 = require("react"), import_node9 = require("@remix-run/node"), import_polaris5 = require("@shopify/polaris"), import_react16 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-XBXYCZPP.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader7 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node9.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action4 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node9.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react16.useLoaderData)(), actionData = (0, import_react16.useActionData)(), [shop, setShop] = (0, import_react15.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris5.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris5.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris5.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris5.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris5.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 48,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_polaris5.TextField,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris5.Button, { submit: !0, children: "Log in" }, void 0, !1, {
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
  action: () => action5
});
var action5 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(
    request
  );
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
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
  loader: () => loader8
});
var import_node10 = require("@remix-run/node"), import_react17 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader8 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node10.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node10.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react17.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
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
  loader: () => loader9
});
var loader9 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader10
});
var import_node11 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react19 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }], loader10 = async ({ request }) => (await authenticate.admin(request), (0, import_node11.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App3() {
  let apiKey = (0, import_react18.useLoaderData)().apiKey;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(MyContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react19.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react18.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react18.Link, { to: "/app/settings", children: "Settings" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react18.Link, { to: "/app/variantshipdatedata", children: "Variant data" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react18.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UOPNXVJG.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-2CDJUM7E.js", "/build/_shared/chunk-DYYXLKDN.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G264EY7A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-AVQZSCFP.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-3C7T4B3W.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-A2YVP6YM.js", "/build/_shared/chunk-XEU7UHRU.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-5R42G47M.js", imports: ["/build/_shared/chunk-3EYAZZDZ.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.products.$id": { id: "routes/app.products.$id", parentId: "routes/app", path: "products/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.products.$id-VI6ITYJ7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/app.qrcodes.$id": { id: "routes/app.qrcodes.$id", parentId: "routes/app", path: "qrcodes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.qrcodes.$id-4R32AFFX.js", imports: ["/build/_shared/chunk-3EYAZZDZ.js", "/build/_shared/chunk-DXZPNPAJ.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.settings": { id: "routes/app.settings", parentId: "routes/app", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/app.settings-7G3ZXZYH.js", imports: ["/build/_shared/chunk-KLKHINSH.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.variantshipdatedata": { id: "routes/app.variantshipdatedata", parentId: "routes/app", path: "variantshipdatedata", index: void 0, caseSensitive: void 0, module: "/build/routes/app.variantshipdatedata-4SVGGC6I.js", imports: ["/build/_shared/chunk-KLKHINSH.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-3WL7W2HD.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-XEU7UHRU.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/qrcodes.$id": { id: "routes/qrcodes.$id", parentId: "root", path: "qrcodes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.$id-LHJI55AS.js", imports: ["/build/_shared/chunk-DXZPNPAJ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/qrcodes.$id.scan": { id: "routes/qrcodes.$id.scan", parentId: "routes/qrcodes.$id", path: "scan", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.$id.scan-2CY3SXY7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "f752a15d", hmr: { runtime: "/build/_shared/chunk-DYYXLKDN.js", timestamp: 1700230144560 }, url: "/build/manifest-F752A15D.js" };

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
  "routes/app.variantshipdatedata": {
    id: "routes/app.variantshipdatedata",
    parentId: "routes/app",
    path: "variantshipdatedata",
    index: void 0,
    caseSensitive: void 0,
    module: app_variantshipdatedata_exports
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
