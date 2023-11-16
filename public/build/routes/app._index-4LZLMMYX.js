import {
  require_QRCode
} from "/build/_shared/chunk-3EYAZZDZ.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Card,
  EmptyState,
  Icon,
  IndexTable,
  InlineStack,
  Layout,
  Page,
  SvgDiamondAlertMajor,
  SvgImageMajor,
  Text,
  Thumbnail,
  init_dist,
  init_esm as init_esm2
} from "/build/_shared/chunk-OIJQMBPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  init_esm,
  useLoaderData,
  useNavigate
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app._index.jsx
init_remix_hmr();
var import_node = __toESM(require_node());
init_esm();
var import_shopify = __toESM(require_shopify());
init_esm2();
var import_QRCode = __toESM(require_QRCode());
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index.jsx"
  );
  import.meta.hot.lastModified = "1700127868066.765";
}
var EmptyQRCodeState = ({
  onAction
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { heading: "Create unique QR codes for your product", action: {
  content: "Create QR code",
  onAction
}, image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Allow customers to scan codes and buy products using their phones." }, void 0, false, {
  fileName: "app/routes/app._index.jsx",
  lineNumber: 46,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/routes/app._index.jsx",
  lineNumber: 42,
  columnNumber: 7
}, this);
_c = EmptyQRCodeState;
function truncate(str, {
  length = 25
} = {}) {
  if (!str)
    return "";
  if (str.length <= length)
    return str;
  return str.slice(0, length) + "\u2026";
}
var QRTable = ({
  qrCodes
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable, { resourceName: {
  singular: "QR code",
  plural: "QR codes"
}, itemCount: qrCodes.length, headings: [{
  title: "Thumbnail",
  hidden: true
}, {
  title: "Title"
}, {
  title: "Product"
}, {
  title: "Date created"
}, {
  title: "Scans"
}], selectable: false, children: qrCodes.map((qrCode) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QRTableRow, { qrCode }, qrCode.id, false, {
  fileName: "app/routes/app._index.jsx",
  lineNumber: 73,
  columnNumber: 28
}, this)) }, void 0, false, {
  fileName: "app/routes/app._index.jsx",
  lineNumber: 58,
  columnNumber: 7
}, this);
_c2 = QRTable;
var QRTableRow = ({
  qrCode
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { id: qrCode.id, position: qrCode.id, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: qrCode.productImage || SvgImageMajor, alt: qrCode.productTitle, size: "small" }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 79,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `qrcodes/${qrCode.id}`, children: truncate(qrCode.title) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 82,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: qrCode.productDeleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "start", gap: "200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      width: "20px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgDiamondAlertMajor, tone: "critical" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 90,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { tone: "critical", as: "span", children: "product has been deleted" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 86,
    columnNumber: 32
  }, this) : truncate(qrCode.productTitle) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 85,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: new Date(qrCode.createdAt).toDateString() }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 97,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: qrCode.scans }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 100,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/app._index.jsx",
  lineNumber: 78,
  columnNumber: 7
}, this);
_c3 = QRTableRow;
function Index() {
  _s();
  const {
    qrCodes
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "QR codes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { variant: "primary", onClick: () => navigate("/app/qrcodes/new"), children: "Create QR code" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { padding: "0", children: qrCodes.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyQRCodeState, { onAction: () => navigate("qrcodes/new") }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 118,
      columnNumber: 37
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QRTable, { qrCodes }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 118,
      columnNumber: 101
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 117,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(Index, "oW7M0gPIENGua3Ylz4/HcUyMwQ0=", false, function() {
  return [useLoaderData, useNavigate];
});
_c4 = Index;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "EmptyQRCodeState");
$RefreshReg$(_c2, "QRTable");
$RefreshReg$(_c3, "QRTableRow");
$RefreshReg$(_c4, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-4LZLMMYX.js.map
