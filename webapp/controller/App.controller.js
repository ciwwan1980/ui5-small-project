sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (
  Controller,
  MessageToast
) {
  "use strict";

  return Controller.extend("opensap.myapp.controller.App", {
    onShowHello: function () {
      // show a native JavaScript alert
      MessageToast.show("hello message");
    },
    onInit: function () {
      console.log("it happen before the ui rendering");
    },
    onBeforeRendering: function () {
      console.log("it happen every time ui is rendered");
    },
  });
});
