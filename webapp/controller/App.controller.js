sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (
  Controller,
  MessageToast
) {
  "use strict";

  return Controller.extend("opensap.myapp.controller.App", {
    onShowHello: function () {
    // read msg from i18n model
var oBundle = this.getView().getModel("i18n").getResourceBundle();
var sRecipient =
this.getView().getModel("helloPanel").getProperty("/recipient/name");
var sMsg = oBundle.getText("helloMsg", [sRecipient]);
// show message
MessageToast.show(sMsg);
    },
    onInit: function () {
      console.log("it happen before the ui rendering");
    },
    onBeforeRendering: function () {
      console.log("it happen every time ui is rendered");
    },
  });
});
