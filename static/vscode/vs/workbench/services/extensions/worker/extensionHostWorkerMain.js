"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/!function(){var e;let r=self.MonacoEnvironment,o=r&&r.baseUrl?r.baseUrl:"../../../../../";const s=null===(e=self.trustedTypes)||void 0===e?void 0:e.createPolicy("amdLoader",{createScriptURL:e=>e});if("function"!=typeof self.define||!self.define.amd){let e=o+"vs/loader.js";s&&(e=s.createScriptURL(e)),importScripts(e)}require.config({baseUrl:o,catchError:!0,trustedTypesPolicy:s}),require(["vs/workbench/services/extensions/worker/extensionHostWorker"],()=>{},e=>console.error(e))}();
//# sourceMappingURL=extensionHostWorkerMain.js.map
