'use strict';

/**
 * This exposes the native ToastAndroid module as a JS module. This has a function 'show'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG
 */
import { NativeModules } from 'react-native';


var GeitDevice = NativeModules.GeitDevice;

GeitDevice.IDCard = NativeModules.IDCard;
GeitDevice.ICCard = NativeModules.ICCard;
GeitDevice.MagCard = NativeModules.MagCard;
GeitDevice.PinPad = NativeModules.PinPad;
GeitDevice.Fingler = NativeModules.Fingler;
export default GeitDevice;
//export default NativeModules.GeitDevice||{IDCard:NativeModules.IDCard};
