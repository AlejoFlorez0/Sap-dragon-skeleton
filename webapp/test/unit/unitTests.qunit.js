/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"saparagodragon_skeleton/dragon-skeleton/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
