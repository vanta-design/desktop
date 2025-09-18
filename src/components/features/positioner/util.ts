export function calculateOffsetValue(offset: number | string | undefined) {
  if (typeof offset === 'number') {
    return offset;
  }
  if (!offset) {
    return 0;
  }

  const trimmed = offset.trim();

  const varMatch = trimmed.match(/^var\(\s*(--[^,)\s]+)\s*(?:,[^)]+)?\)$/);
  if (varMatch) {
    const varName = varMatch[1];
    if (!varName) {
      return 0;
    }
    return getValueFromVar(varName);
  }

  const parsed = parseFloat(trimmed);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getValueFromVar(varName: string, fallback = 0) {
  if (!varName.startsWith('--')) {
    throw new Error('Invalid CSS variable name');
  }

  const el = document.documentElement;
  const computed = window.getComputedStyle(el).getPropertyValue(varName).trim();
  const parsed = parseFloat(computed);
  return Number.isFinite(parsed) ? parsed : fallback;
}
