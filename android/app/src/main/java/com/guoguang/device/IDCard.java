package com.guoguang.device;

import android.util.Base64;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.guoguang.bean.ICCardInfo;
import com.guoguang.bean.IDCardBean;
import com.guoguang.service.BluedeviceManager;

/**
 * Created by youxz on 2017/2/21.
 */

public class IDCard extends ReactContextBaseJavaModule {

    public IDCard(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IDCard";
    }


    @ReactMethod
    public void readIdCard(Callback callback){
        WritableMap rc = Arguments.createMap();

        BluedeviceManager bluedeviceManager = BluedeviceManager.getInstance();
        IDCardBean idcardbean = bluedeviceManager.readIDCardInfo(20);

        if(idcardbean.getResult()){
            rc.putString("Name",idcardbean.getName());
            rc.putString("Sex",idcardbean.getSex());
            rc.putString("Id",idcardbean.getIdNumber());
            rc.putString("Address",idcardbean.getAddress());
            rc.putString("Birthday",idcardbean.getBirthday());
            rc.putString("Nation",idcardbean.getNation());
            rc.putString("Photo",Base64.encodeToString(idcardbean.getPhoto(),Base64.NO_WRAP));
            rc.putString("Issuer",idcardbean.getIssuer());
            rc.putString("ValidDateBegin",idcardbean.getValidDateBegin());
            rc.putString("ValidDateEnd",idcardbean.getValidDateEnd());
            //rc.putString("FigerData",Base64.encodeToString(idcardbean.getFingerData(),Base64.NO_WRAP));
            rc.putString("errcode",idcardbean.getCode());
            rc.putString("errmsg",idcardbean.getResultMsg());
            rc.putString("PhotoUrl",idcardbean.getPicsrc());
            callback.invoke(true,rc);
        }else{
            rc.putString("errcode",idcardbean.getCode());
            rc.putString("errmsg",idcardbean.getResultMsg());
            callback.invoke(false,rc);
        }


    }



}
