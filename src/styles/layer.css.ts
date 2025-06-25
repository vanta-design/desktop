import { globalLayer } from '@vanilla-extract/css';
import { getLayerApplier } from '../utils/style';

export const resetLayer = globalLayer('reset');
export const vantaLayer = globalLayer('vanta');

export const { globalStyle: resetGlobalStyle } = getLayerApplier(resetLayer);
export const { style } = getLayerApplier(vantaLayer);
