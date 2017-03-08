package com.guoguang.device;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.guoguang.service.BluedeviceManager;

/**
 * Created by youxz on 2017/2/21.
 */

public class Fingler extends ReactContextBaseJavaModule {

    public Fingler(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Fingler";
    }

    @ReactMethod
    public void readFinger(Callback callback){
        BluedeviceManager bluedeviceManager = BluedeviceManager.getInstance();
        String re = bluedeviceManager.readFinger(20);
        if(re!=null){
            if(re.startsWith("success")){
                callback.invoke(true,re.substring(8));
            }else{
                callback.invoke(false,re);
            }
        }else{
            callback.invoke(false,null);
        }

    }

}
