import {
  require_db
} from "/build/_shared/chunk-DXZPNPAJ.js";
import {
  require_QRCode
} from "/build/_shared/chunk-3EYAZZDZ.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Bleed,
  BlockStack,
  Button,
  Card,
  ChoiceList,
  Divider,
  EmptyState,
  InlineError,
  InlineStack,
  Layout,
  Page,
  PageActions,
  SvgImageMajor,
  Text,
  TextField,
  Thumbnail,
  init_dist,
  init_esm as init_esm2
} from "/build/_shared/chunk-OIJQMBPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  init_esm,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-FROLWTDC.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-DYYXLKDN.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.qrcodes.$id.jsx
init_remix_hmr();
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
init_esm();
var import_shopify = __toESM(require_shopify());
init_esm2();
init_dist();
var import_db = __toESM(require_db());
var import_QRCode = __toESM(require_QRCode());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.qrcodes.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.qrcodes.$id.jsx"
  );
  import.meta.hot.lastModified = "1700127868080.871";
}
function QRCodeForm() {
  var _a, _b, _c2;
  _s();
  const errors = ((_a = useActionData()) == null ? void 0 : _a.errors) || {};
  const qrCode = useLoaderData();
  const [formState, setFormState] = (0, import_react.useState)(qrCode);
  const [cleanFormState, setCleanFormState] = (0, import_react.useState)(qrCode);
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState);
  const nav = useNavigation();
  const isSaving = nav.state === "submitting" && ((_b = nav.formData) == null ? void 0 : _b.get("action")) !== "delete";
  const isDeleting = nav.state === "submitting" && ((_c2 = nav.formData) == null ? void 0 : _c2.get("action")) === "delete";
  const navigate = useNavigate();
  async function selectProduct() {
    var _a2, _b2;
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select"
      // customized action verb, either 'select' or 'add',
    });
    if (products) {
      const {
        images,
        id,
        variants,
        title,
        handle
      } = products[0];
      setFormState({
        ...formState,
        productId: id,
        productVariantId: variants[0].id,
        productTitle: title,
        productHandle: handle,
        productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
        productImage: (_b2 = images[0]) == null ? void 0 : _b2.originalSrc
      });
    }
  }
  const submit = useSubmit();
  function handleSave() {
    const data = {
      title: formState.title,
      productId: formState.productId || "",
      productVariantId: formState.productVariantId || "",
      productHandle: formState.productHandle || "",
      destination: formState.destination
    };
    setCleanFormState({
      ...formState
    });
    console.log("data", data);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: qrCode.id ? "Edit QR code" : "Create new QR code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { variant: "breadcrumb", onClick: () => navigate("/app"), children: "QR codes" }, void 0, false, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 142,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingLg", children: "Title" }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 152,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { id: "title", helpText: "Only store staff can see this title", label: "title", labelHidden: true, autoComplete: "off", value: formState.title, onChange: (title) => setFormState({
            ...formState,
            title
          }), error: errors.title }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 155,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 151,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { align: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingLg", children: "Product" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 164,
              columnNumber: 19
            }, this),
            formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", onClick: selectProduct, children: "Change product" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 167,
              columnNumber: 42
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 163,
            columnNumber: 17
          }, this),
          formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { blockAlign: "center", gap: "500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: formState.productImage || SvgImageMajor, alt: formState.productAlt }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 172,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "headingMd", fontWeight: "semibold", children: formState.productTitle }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 173,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 171,
            columnNumber: 40
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: selectProduct, id: "select-product", children: "Select product" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 177,
              columnNumber: 21
            }, this),
            errors.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineError, { message: errors.productId, fieldID: "myFieldID" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 180,
              columnNumber: 41
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 176,
            columnNumber: 36
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bleed, { marginInlineStart: "200", marginInlineEnd: "200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 183,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 182,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineStack, { gap: "500", align: "space-between", blockAlign: "start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Scan destination", choices: [{
              label: "Link to product page",
              value: "product"
            }, {
              label: "Link to checkout page with product in the cart",
              value: "cart"
            }], selected: [formState.destination], onChange: (destination) => setFormState({
              ...formState,
              destination: destination[0]
            }), error: errors.destination }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 186,
              columnNumber: 19
            }, this),
            qrCode.destinationUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "plain", url: qrCode.destinationUrl, target: "_blank", children: "Go to destination URL" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 196,
              columnNumber: 44
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 162,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 149,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingLg", children: "QR code" }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 206,
          columnNumber: 13
        }, this),
        qrCode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { image: qrCode.image, imageContained: true }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 209,
          columnNumber: 23
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { image: "", children: "Your QR code will appear here after you save" }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 209,
          columnNumber: 83
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !(qrCode == null ? void 0 : qrCode.image), url: qrCode == null ? void 0 : qrCode.image, download: true, variant: "primary", children: "Download" }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !qrCode.id, url: `/qrcodes/${qrCode.id}`, target: "_blank", children: "Go to public URL" }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 216,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 205,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 204,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageActions, { secondaryActions: [{
        content: "Delete",
        loading: isDeleting,
        disabled: !qrCode.id || !qrCode || isSaving || isDeleting,
        destructive: true,
        outline: true,
        onAction: () => submit({
          action: "delete"
        }, {
          method: "post"
        })
      }], primaryAction: {
        content: "Save",
        loading: isSaving,
        disabled: !isDirty || isSaving || isDeleting,
        onAction: handleSave
      } }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 223,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 222,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 147,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.qrcodes.$id.jsx",
    lineNumber: 141,
    columnNumber: 10
  }, this);
}
_s(QRCodeForm, "TnJqX7Js1TeG6w4qsWDEc9Dsqyk=", false, function() {
  return [useActionData, useLoaderData, useNavigation, useNavigate, useSubmit];
});
_c = QRCodeForm;
var _c;
$RefreshReg$(_c, "QRCodeForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  QRCodeForm as default
};
//# sourceMappingURL=/build/routes/app.qrcodes.$id-PDYJMLGT.js.map
