const RAZAO_LOGO_DACOMPSI = 0.565;
const LOGO_SMALL_HEIGHT_DACOMPSI = 150;
const LOGO_MEDIUM_HEIGHT_DACOMPSI = 200;

interface LogoSizes {
  width: {
    small: number;
    medium: number;
    big?: number;
  };
  height: {
    small: number;
    medium: number;
    big?: number;
  };
}

export const LogoDacompsiSizes: LogoSizes = {
  width: {
    small: RAZAO_LOGO_DACOMPSI * LOGO_SMALL_HEIGHT_DACOMPSI,
    medium: RAZAO_LOGO_DACOMPSI * LOGO_MEDIUM_HEIGHT_DACOMPSI,
  },
  height: {
    small: LOGO_SMALL_HEIGHT_DACOMPSI,
    medium: LOGO_MEDIUM_HEIGHT_DACOMPSI,
  },
};
