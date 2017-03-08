package com.guoguang.device;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.guoguang.service.BluedeviceManager;

/**
 * Created by youxz on 2017/2/21.
 */

public class GeitDevice extends ReactContextBaseJavaModule {

    public GeitDevice(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GeitDevice";
    }

    @ReactMethod
    public void connect(Callback callback) {
        try {
            String addr = BluedeviceManager.getInstance().getMacAddr("BOLUTEK_GEIT_ABCDEF");
            BluedeviceManager.getInstance().setArgs(null, addr, null);
            int rc = BluedeviceManager.getInstance().connBlueTooth();
            callback.invoke(rc==0?true:false,rc==0?"设备连接成功":"设备连接失败");
        }catch(Exception e){
            e.printStackTrace();
            callback.invoke(false,e.getMessage());
        }

    }

    @ReactMethod
    public void isConnect(Callback callback) {
        if(BluedeviceManager.getInstance().disConnect()){
            callback.invoke(true);
        }else{
            callback.invoke(false);
        }
    }


    @ReactMethod
    public void disconnect() {

        try {
            BluedeviceManager.getInstance().disConnect();
        }catch(Exception e){
            e.printStackTrace();

        }

    }


}
