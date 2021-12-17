import assets from './config/assets';

/**
 * Given an asset key, return path to the static asset.
 *
 * @param {string} assetKey Asset Key.
 * @returns {string} Path to the static asset.
 */
const loadStaticAsset = assetKey => {
  try {
    return assets[assetKey].urls.publicStatic;
  } catch {
    throw new Error(assetKey);
  }
};

export default loadStaticAsset;
