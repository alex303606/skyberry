package com.skyberry;
import android.view.View;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "skyberry";
  }

  @Override
      public void onWindowFocusChanged(boolean hasFocus) {
          super.onWindowFocusChanged(hasFocus);
          if (hasFocus) {
              View decorView = getWindow().getDecorView();
              int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                      | View.SYSTEM_UI_FLAG_FULLSCREEN
                      | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
              decorView.setSystemUiVisibility(uiOptions);
          }
      }
}
