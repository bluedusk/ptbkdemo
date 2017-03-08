package com.guoguang.device;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.guoguang.bean.MagCardInfo;
import com.guoguang.service.BluedeviceManager;

/**
 * Created by youxz on 2017/2/21.
 */

public class MagCard extends ReactContextBaseJavaModule {

    public MagCard(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MagCard";
    }


    @ReactMethod
    public void readMagCard(Callback callback){
        WritableMap rc = Arguments.createMap();
        BluedeviceManager bluedeviceManager = BluedeviceManager.getInstance();
        MagCardInfo magCardInfo = bluedeviceManager.readMAGCard(20);
        if(magCardInfo.getResult()){
            rc.putString("Track1",magCardInfo.getTrack1());
            rc.putString("Track2",magCardInfo.getTrack2());
            rc.putString("Track3",magCardInfo.getTrack3());
            rc.putString("errcode",magCardInfo.getCode());
            rc.putString("errmsg",magCardInfo.getResultMsg());
            callback.invoke(true,rc);
        }else{
            rc.putString("errcode",magCardInfo.getCode());
            rc.putString("errmsg",magCardInfo.getResultMsg());
            callback.invoke(false,rc);
        }
    }
}
