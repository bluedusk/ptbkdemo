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

public class PinPad extends ReactContextBaseJavaModule {

    public PinPad(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PinPad";
    }

    /**
     *
     * @param length 获取长度
     * @param callback 回调(boolean,String)
     */
    @ReactMethod
    public void readPinpad(int length,Callback callback){
        BluedeviceManager bluedeviceManager = BluedeviceManager.getInstance();
        String re=bluedeviceManager.getPin(6, 20);
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

    @ReactMethod
    public void getPinBlock(int length,String cardno,boolean isDouble,Callback callback){
        BluedeviceManager bluedeviceManager = BluedeviceManager.getInstance();
        String re=null;
        if(isDouble){
            re=bluedeviceManager.getPinBlockDouble(6,"6217231105000876203",1,1,500000);
        }else{
            re=bluedeviceManager.getPinBlock(6,"6217231105000876203",1,1,500000);
        }

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
