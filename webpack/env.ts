export enum AppMode {
  DEV = 'DEV',
  PRODUCTION = 'PRODUCTION',
}

const env: {
  APP_MODE: AppMode;
} = {
  APP_MODE: AppMode.DEV,
};

export default env;
