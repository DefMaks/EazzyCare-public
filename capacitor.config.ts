import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.afiabora.eazzycarec',
  appName: 'EazzyCare',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      // androidScaleType: "CENTER_CROP",
      backgroundColor: "002229",
      launchAutoHide: true,
      launchFadeOutDuration: 600,
      splashFullScreen: true,
      splashImmersive: true,
    },
  }
};

export default config;
