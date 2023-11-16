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
var import_node3 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/models/variantShipDateData.server.js
var import_tiny_invariant = require("tiny-invariant");
async function fetchDBShipDateData() {
  return await db_server_default.variantShipDateData.findMany();
}
async function fetchSettings() {
  return await db_server_default.settings.findMany();
}

// app/routes/app.variantshipdatedata.jsx
var import_react4 = require("react");

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
function formatCurrentProductData(currentProductData) {
  let currentDateString = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US").split("/").reverse().join("-"), dataBaseObjectAllProducts = {}, bundleProductsArray = [];
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
      dataBaseUpdateObject.processingTime = variant.processing_time ? variant.processing_time : "2", dataBaseUpdateObject.dateAvailable = variant.date_available ? variant.date_available : `${currentDateString}`, dataBaseUpdateObject.overrideMessage = variant.shipping ? variant.shipping : "", dataBaseUpdateObject.bundleProducts = variant.bundle_products ? variant.bundle_products : "", dataBaseUpdateObject.shipDateMessage = variant.ship_date_string ? variant.ship_date_string : "", dataBaseObjectAllProducts[`${variant.id}`] = JSON.stringify(dataBaseUpdateObject);
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
function generateShipMessage(variantData) {
  let buffer = 5, dtcProcessingTimeMessage = "Ships for free #processing_time_description#.", dtcDateAvailableMessage = "Ships for free #date_available_description#.", b2bProcessingTimeMessage = "Ships with white glove installation #processing_time_description#.", b2bDateAvailableMessage = "Ships with white glove installation #date_available_description#.", dtcDefaultShippingRange = 1, b2bDefaultShippingRange = 1, message = "", shippingProcessingMessage = "";
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
function returnCurrentShipDateStrings(currentData) {
  let currentShipDateStrings = {};
  for (let [key, value] of Object.entries(currentData)) {
    let shipMessage = generateShipMessage(JSON.parse(value));
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

// app/routes/app.variantshipdatedata.jsx
var import_axios = __toESM(require("axios")), import_node_readline = require("node:readline"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
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
  return await poll(helper, validate, 5e3);
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
  let { admin } = await shopify_server_default.authenticate.admin(request), [bulkOperation, dbProducts] = await Promise.all([
    startBulkOperation(admin),
    fetchDbProducts()
  ]), url = await fetchBulkOperationData(bulkOperation, admin), products = await fetchProductsFromUrl(url.data.node.url);
  return (0, import_node3.json)({ bulkOperation, dbProducts, url, products });
}
async function action({ request, params }) {
  let { admin } = await shopify_server_default.authenticate.admin(request), data = await request.formData(), array = [], submission_type = "";
  for (var pair of data.entries())
    JSON.parse(pair[1]).submission_type ? submission_type = JSON.parse(pair[1]).submission_type : array.push(JSON.parse(pair[1]));
  return submission_type == "update_db" ? await dbUpdate(array) : submission_type == "update_metafields" && await metafieldsUpdate(array, admin), (0, import_node3.redirect)("/app/variantshipdatedata");
}
function variantShipDataDataList() {
  let loadData = (0, import_react3.useLoaderData)(), bulkOperationData = loadData.bulkOperation, dbShipDateData = loadData.dbProducts, url = loadData.url.data.node.url, products = loadData.products, formattedProducts = formatBulkDataOperationJSON(products), dataBaseObjectAllProducts = formatCurrentProductData(formattedProducts), dbShipDateStrings = returnDBShipDateStrings(dbShipDateData), currentShipDateStrings = returnCurrentShipDateStrings(dataBaseObjectAllProducts), variantsToUpdateShipDateStrings = returnVariantsToUpdateShipDateStrings(dbShipDateStrings, currentShipDateStrings), submit = (0, import_react3.useSubmit)();
  function handleUpdateMetafieldsClick() {
    variantsToUpdateShipDateStrings.submission_type = JSON.stringify({ submission_type: "update_metafields" }), console.log("variantsToUpdateShipDateStrings", variantsToUpdateShipDateStrings);
    let formData = new FormData();
    Object.keys(variantsToUpdateShipDateStrings).forEach((key) => {
      typeof variantsToUpdateShipDateStrings[key] != "object" ? formData.append(key, variantsToUpdateShipDateStrings[key]) : formData.append(key, JSON.stringify(variantsToUpdateShipDateStrings[key]));
    });
    let array = [], submission_type = "";
    for (var pair of formData.entries())
      JSON.parse(pair[1]).submission_type ? submission_type = JSON.parse(pair[1]).submission_type : array.push(JSON.parse(pair[1]));
    console.log("array", array), array.length > 0 && submit(variantsToUpdateShipDateStrings, { method: "post" });
  }
  function handleUpdateDataBaseClick() {
    dataBaseObjectAllProducts.submission_type = JSON.stringify({ submission_type: "update_db" }), console.log("dataBaseObjectAllProducts", dataBaseObjectAllProducts), submit(dataBaseObjectAllProducts, { method: "post" });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => handleUpdateDataBaseClick(), children: "Submit" }, void 0, !1, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 262,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => handleUpdateMetafieldsClick(variantsToUpdateShipDateStrings), children: "Update metafields" }, void 0, !1, {
      fileName: "app/routes/app.variantshipdatedata.jsx",
      lineNumber: 263,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.variantshipdatedata.jsx",
    lineNumber: 261,
    columnNumber: 9
  }, this);
}

// app/routes/qrcodes.$id.scan.jsx
var qrcodes_id_scan_exports = {};
__export(qrcodes_id_scan_exports, {
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/models/QRCode.server.js
var import_qrcode = __toESM(require("qrcode")), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
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
  return (0, import_tiny_invariant2.default)(match, "Unrecognized product variant ID"), `https://${qrCode.shop}/cart/${match[1]}:1`;
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
  (0, import_tiny_invariant3.default)(params.id, "Could not find QR code destination");
  let id = Number(params.id), qrCode = await db_server_default.qRCode.findFirst({ where: { id } });
  return (0, import_tiny_invariant3.default)(qrCode, "Could not find QR code destination"), await db_server_default.qRCode.update({
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
var import_react5 = require("react"), import_node5 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_polaris = require("@shopify/polaris"), import_polaris_icons = require("@shopify/polaris-icons");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader3({ request, params }) {
  let { admin } = await authenticate.admin(request);
  return params.id === "new" ? (0, import_node5.json)({
    destination: "product",
    title: ""
  }) : (0, import_node5.json)(await getQRCode(Number(params.id), admin.graphql));
}
async function action2({ request, params }) {
  let { session } = await authenticate.admin(request), { shop } = session;
  console.log(
    "action!!!!"
  );
  let data = {
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
  let errors = (0, import_react6.useActionData)()?.errors || {}, qrCode = (0, import_react6.useLoaderData)(), [formState, setFormState] = (0, import_react5.useState)(qrCode), [cleanFormState, setCleanFormState] = (0, import_react5.useState)(qrCode), isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState), nav = (0, import_react6.useNavigation)(), isSaving = nav.state === "submitting" && nav.formData?.get("action") !== "delete", isDeleting = nav.state === "submitting" && nav.formData?.get("action") === "delete", navigate = (0, import_react6.useNavigate)();
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
  let submit = (0, import_react6.useSubmit)();
  function handleSave() {
    let data = {
      title: formState.title,
      productId: formState.productId || "",
      productVariantId: formState.productVariantId || "",
      productHandle: formState.productHandle || "",
      destination: formState.destination
    };
    setCleanFormState({ ...formState }), console.log("data", data);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ui-title-bar", { title: qrCode.id ? "Edit QR code" : "Create new QR code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { variant: "breadcrumb", onClick: () => navigate("/app"), children: "QR codes" }, void 0, !1, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 135,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Text, { as: "h2", variant: "headingLg", children: "Title" }, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 144,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_polaris.TextField,
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
              lineNumber: 147,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 143,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.InlineStack, { align: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Text, { as: "h2", variant: "headingLg", children: "Product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Button, { variant: "plain", onClick: selectProduct, children: "Change product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 166,
              columnNumber: 21
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 161,
            columnNumber: 17
          }, this),
          formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.InlineStack, { blockAlign: "center", gap: "500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_polaris.Thumbnail,
              {
                source: formState.productImage || import_polaris_icons.ImageMajor,
                alt: formState.productAlt
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.qrcodes.$id.jsx",
                lineNumber: 173,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Text, { as: "span", variant: "headingMd", fontWeight: "semibold", children: formState.productTitle }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 177,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 172,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.BlockStack, { gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Button, { onClick: selectProduct, id: "select-product", children: "Select product" }, void 0, !1, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 183,
              columnNumber: 21
            }, this),
            errors.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_polaris.InlineError,
              {
                message: errors.productId,
                fieldID: "myFieldID"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/app.qrcodes.$id.jsx",
                lineNumber: 187,
                columnNumber: 23
              },
              this
            ) : null
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 182,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Bleed, { marginInlineStart: "200", marginInlineEnd: "200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Divider, {}, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 195,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 194,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.InlineStack, { gap: "500", align: "space-between", blockAlign: "start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_polaris.ChoiceList,
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
                lineNumber: 198,
                columnNumber: 19
              },
              this
            ),
            qrCode.destinationUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_polaris.Button,
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
                lineNumber: 217,
                columnNumber: 21
              },
              this
            ) : null
          ] }, void 0, !0, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 197,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 160,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 159,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 141,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Text, { as: "h2", variant: "headingLg", children: "QR code" }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 232,
          columnNumber: 13
        }, this),
        qrCode ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.EmptyState, { image: qrCode.image, imageContained: !0 }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 236,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.EmptyState, { image: "", children: "Your QR code will appear here after you save" }, void 0, !1, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 238,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.BlockStack, { gap: "300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_polaris.Button,
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
              lineNumber: 243,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_polaris.Button,
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
              lineNumber: 251,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 242,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 231,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_polaris.PageActions,
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
          lineNumber: 262,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 261,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.qrcodes.$id.jsx",
    lineNumber: 133,
    columnNumber: 5
  }, this);
}

// app/routes/app.settings.jsx
var app_settings_exports = {};
__export(app_settings_exports, {
  default: () => SettingsPage,
  loader: () => loader4
});
var import_polaris2 = require("@shopify/polaris"), import_node6 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_react8 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let settings = await fetchSettings();
  return (0, import_node6.json)({ settings });
}
function SettingsPage() {
  let submit = (0, import_react7.useSubmit)(), settings = (0, import_react7.useLoaderData)().settings[0], [buffer, setBuffer] = (0, import_react8.useState)(settings.buffer), [defaultProcessingTime, setDefaultProcessingTime] = (0, import_react8.useState)(settings.defaultProcessingTime), [dtcDefaultShippingRange, setDtcDefaultShippingRange] = (0, import_react8.useState)(settings.dtcDefaultShippingRange), [b2bDefaultShippingRange, setB2bDefaultShippingRange] = (0, import_react8.useState)(settings.b2bDefaultShippingRange), [dtcDateAvailableMessage, setDtcDateAvailableMessage] = (0, import_react8.useState)(settings.dtcDateAvailableMessage), [dtcProcessingTimeMessage, setDtcProcessingTimeMessage] = (0, import_react8.useState)(settings.dtcProcessingTimeMessage), [b2bDateAvailableMessage, setB2bDateAvailableMessage] = (0, import_react8.useState)(settings.b2bDateAvailableMessage), [b2bProcessingTimeMessage, setb2bProcessingTimeMessage] = (0, import_react8.useState)(settings.b2bProcessingTimeMessage), handleSubmit = (0, import_react8.useCallback)(() => {
    let updatedSettingsObject = {};
    updatedSettingsObject.b2bDateAvailableMessage = b2bDateAvailableMessage, updatedSettingsObject.b2bDefaultShippingRange = b2bDefaultShippingRange, updatedSettingsObject.b2bProcessingTimeMessage = b2bProcessingTimeMessage, updatedSettingsObject.buffer = buffer, updatedSettingsObject.defaultProcessingTime = defaultProcessingTime, updatedSettingsObject.dtcDateAvailableMessage = dtcDateAvailableMessage, updatedSettingsObject.dtcDefaultShippingRange = dtcDefaultShippingRange, updatedSettingsObject.dtcProcessingTimeMessage = dtcProcessingTimeMessage, updatedSettingsObject.id = 1;
    let sortedSettings = Object.keys(settings).sort().reduce(
      (obj, key) => (obj[key] = settings[key], obj),
      {}
    );
    console.log("updatedSettingsObject", updatedSettingsObject);
    let difference = JSON.stringify(updatedSettingsObject) !== JSON.stringify(sortedSettings);
    console.log("handle", JSON.stringify(sortedSettings), "second", JSON.stringify(updatedSettingsObject)), console.log("difference", difference);
  }, []), handleRangeSliderChange = (0, import_react8.useCallback)(
    (value) => setBuffer(value),
    []
  );
  return console.log("settings", settings), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: [
      " ",
      buffer,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ui-title-bar", { title: "Settings page" }, void 0, !1, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Form, { onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.FormLayout, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_polaris2.RangeSlider,
          {
            label: "Buffer days",
            value: buffer,
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
            lineNumber: 100,
            columnNumber: 10
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Button, { submit: !0, children: "Submit" }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 110,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 99,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.BlockStack, { gap: "200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.Text, { as: "h2", variant: "headingMd", children: "Resources" }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 118,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.List, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris2.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_polaris2.Link,
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
            lineNumber: 123,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 122,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/app.settings.jsx",
          lineNumber: 121,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.settings.jsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.settings.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.settings.jsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/qrcodes.$id.jsx
var qrcodes_id_exports = {};
__export(qrcodes_id_exports, {
  default: () => QRCode,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_tiny_invariant4 = __toESM(require("tiny-invariant")), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  (0, import_tiny_invariant4.default)(params.id, "Could not find QR code destination");
  let id = Number(params.id), qrCode = await db_server_default.qRCode.findFirst({ where: { id } });
  return (0, import_tiny_invariant4.default)(qrCode, "Could not find QR code destination"), (0, import_node7.json)({
    title: qrCode.title,
    image: await getQRCodeImage(id)
  });
};
function QRCode() {
  let { image, title } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: title }, void 0, !1, {
      fileName: "app/routes/qrcodes.$id.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: image, alt: "QR Code for product" }, void 0, !1, {
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
var import_node8 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_polaris3 = require("@shopify/polaris");
var import_polaris_icons2 = require("@shopify/polaris-icons"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  let { admin, session } = await authenticate.admin(request), qrCodes = await getQRCodes(session.shop, admin.graphql);
  return (0, import_node8.json)({
    qrCodes
  });
}
var EmptyQRCodeState = ({ onAction }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  import_polaris3.EmptyState,
  {
    heading: "Create unique QR codes for your product",
    action: {
      content: "Create QR code",
      onAction
    },
    image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Allow customers to scan codes and buy products using their phones." }, void 0, !1, {
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
var QRTable = ({ qrCodes }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  import_polaris3.IndexTable,
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
    children: qrCodes.map((qrCode) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(QRTableRow, { qrCode }, qrCode.id, !1, {
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
), QRTableRow = ({ qrCode }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.IndexTable.Row, { id: qrCode.id, position: qrCode.id, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_polaris3.Thumbnail,
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
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Link, { to: `qrcodes/${qrCode.id}`, children: truncate(qrCode.title) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.IndexTable.Cell, { children: qrCode.productDeleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.InlineStack, { align: "start", gap: "200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: { width: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons2.DiamondAlertMajor, tone: "critical" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 85,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.Text, { tone: "critical", as: "span", children: "product has been deleted" }, void 0, !1, {
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
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.IndexTable.Cell, { children: new Date(qrCode.createdAt).toDateString() }, void 0, !1, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.IndexTable.Cell, { children: qrCode.scans }, void 0, !1, {
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
  let { qrCodes } = (0, import_react10.useLoaderData)(), navigate = (0, import_react10.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ui-title-bar", { title: "QR codes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { variant: "primary", onClick: () => navigate("/app/qrcodes/new"), children: "Create QR code" }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris3.Card, { padding: "0", children: qrCodes.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(EmptyQRCodeState, { onAction: () => navigate("qrcodes/new") }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 117,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(QRTable, { qrCodes }, void 0, !1, {
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
  action: () => action3,
  default: () => Auth,
  links: () => links,
  loader: () => loader7
});
var import_react11 = require("react"), import_node9 = require("@remix-run/node"), import_polaris4 = require("@shopify/polaris"), import_react12 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-XBXYCZPP.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader7 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node9.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action3 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node9.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react12.useLoaderData)(), actionData = (0, import_react12.useActionData)(), [shop, setShop] = (0, import_react11.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react12.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 48,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_polaris4.TextField,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris4.Button, { submit: !0, children: "Log in" }, void 0, !1, {
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
  action: () => action4
});
var action4 = async ({ request }) => {
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
var import_node10 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader8 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node10.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node10.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react13.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
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
var import_node11 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react15 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }], loader10 = async ({ request }) => (await authenticate.admin(request), (0, import_node11.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App3() {
  let { apiKey } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react15.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Link, { to: "/app/settings", children: "Settings" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Link, { to: "/app/variantshipdatedata", children: "Variant data" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react14.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-W5ECR2UB.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-DEW2QNTH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-DYYXLKDN.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FXCIHQJN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-2FBZIGXG.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-CUJRBNXE.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-SZZLSVDJ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-46CEGJN3.js", imports: ["/build/_shared/chunk-3EYAZZDZ.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.qrcodes.$id": { id: "routes/app.qrcodes.$id", parentId: "routes/app", path: "qrcodes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/app.qrcodes.$id-6QJUNXRH.js", imports: ["/build/_shared/chunk-DXZPNPAJ.js", "/build/_shared/chunk-3EYAZZDZ.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.settings": { id: "routes/app.settings", parentId: "routes/app", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/app.settings-5A4O2XE4.js", imports: ["/build/_shared/chunk-C3NP7DHP.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app.variantshipdatedata": { id: "routes/app.variantshipdatedata", parentId: "routes/app", path: "variantshipdatedata", index: void 0, caseSensitive: void 0, module: "/build/routes/app.variantshipdatedata-HEOVBJRZ.js", imports: ["/build/_shared/chunk-C3NP7DHP.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-MPDDNUEP.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-MIBD2XN6.js", "/build/_shared/chunk-SZZLSVDJ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/qrcodes.$id": { id: "routes/qrcodes.$id", parentId: "root", path: "qrcodes/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.$id-KGE4UMEU.js", imports: ["/build/_shared/chunk-DXZPNPAJ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/qrcodes.$id.scan": { id: "routes/qrcodes.$id.scan", parentId: "routes/qrcodes.$id", path: "scan", index: void 0, caseSensitive: void 0, module: "/build/routes/qrcodes.$id.scan-2CY3SXY7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "8dc27b6e", hmr: { runtime: "/build/_shared/chunk-DYYXLKDN.js", timestamp: 1700143346704 }, url: "/build/manifest-8DC27B6E.js" };

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
