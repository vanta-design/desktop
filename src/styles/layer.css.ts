import { globalLayer } from '@vanilla-extract/css';
import { getLayerApplier } from '../utils/style';

export const resetLayer = globalLayer('reset');
export const vandaLayer = globalLayer('vanta');

export const { globalStyle: resetGlobalStyle } = getLayerApplier(resetLayer);
export const { style } = getLayerApplier(vandaLayer);
