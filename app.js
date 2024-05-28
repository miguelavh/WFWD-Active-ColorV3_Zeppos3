import "./shared/device-polyfill";
import { MessageBuilder } from "./shared/message";
import {WATCHDRIP_APP_ID} from "./utils/config/global-constants";
//import { getSystemInfo } from '@zos/settings'

//const { osVersion, minAPI } = getSystemInfo();
const appId = WATCHDRIP_APP_ID;
//const messageBuilder = new MessageBuilder({ appId });

App({
  globalData: {
	//minAPI: minAPI,
	//osVersion: osVersion,
    //messageBuilder: messageBuilder,
  },
  onCreate(options) {
    console.log("app on create invoke");
  },

  onDestroy(options) {
    console.log("app on destroy invoke");
  },
});
