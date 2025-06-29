import {
  globalStyle as _globalStyle,
  style as _style,
  type StyleRule,
} from '@vanilla-extract/css';
import { resetLayer, vantaLayer } from '@/styles/layer.css';

type StyleFunction = typeof _style;

type GlobalStyleFunction = typeof _globalStyle;

type ClassNames = string | Array<ClassNames>;

export function getLayerApplier(layer: string) {
  function style(...args: Parameters<StyleFunction>) {
    const [rule, debugId] = args;

    const appliedRule = Array.isArray(rule)
      ? rule.map((r) => (isLayerApplicable(r) ? applyLayer(layer, r) : r))
      : applyLayer(layer, rule);

    return _style(appliedRule, debugId);
  }

  function globalStyle(...args: Parameters<GlobalStyleFunction>) {
    const [selector, rule] = args;

    return _globalStyle(selector, applyLayer(layer, rule));
  }

  return {
    style,
    globalStyle,
  };
}

export function applyLayer(layer: string, rule: StyleRule) {
  return { '@layer': { [layer]: rule } };
}

function isLayerApplicable(rule: StyleRule | ClassNames): rule is StyleRule {
  return typeof rule === 'object' && !Array.isArray(rule);
}

export const { globalStyle: resetGlobalStyle } = getLayerApplier(resetLayer);
export const { style } = getLayerApplier(vantaLayer);
