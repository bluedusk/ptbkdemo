package com.guoguang.device;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.guoguang.bean.ICCardInfo;
import com.guoguang.service.BluedeviceManager;

/**
 * Created by youxz on 2017/2/21.
 */

public class ICCard extends ReactContextBaseJavaModule {

    public ICCard(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ICCard";
    }

    @ReactMethod
    public void readIcCard(Callback callback){
        WritableMap rc = Arguments.createMap();
        BluedeviceManager bluedeviceManager = BluedeviceManager.getInstance();
        if(bluedeviceManager.isConnDevice){
            ICCardInfo icCardInfo = bluedeviceManager.readICCardInfo(2,"A000000333010101","ABCDEFGHIJ",20);

            rc.putString("id",icCardInfo.getId());
            if(!icCardInfo.getResult()) {
                rc.putString("errmsg", icCardInfo.getResultMsg());
            }
            rc.putBoolean("result",icCardInfo.getResult());

            callback.invoke(icCardInfo.getResult(),rc);
        }else{
            rc.putString("errmsg","设备未连接");
            callback.invoke(false,rc);
        }

    }

}
