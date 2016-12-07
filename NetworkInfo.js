'use strict';

var RNNetworkInfo = require('react-native').NativeModules.RNNetworkInfo;

var NetworkInfo = {
  getBSSID(bssid) {
    RNNetworkInfo.getBSSID(bssid);
  },

  getSSID(ssid) {
    RNNetworkInfo.getSSID(ssid);
  },

  getIPAddress(ip) {
    RNNetworkInfo.getIPAddress(ip);
  }
};

module.exports = NetworkInfo;
