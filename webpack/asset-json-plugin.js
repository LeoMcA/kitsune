class AssetJsonPlugin {
  apply(compiler) {
    const RawSource = compiler.webpack.sources.RawSource;
    compiler.hooks.thisCompilation.tap("asset-json-plugin", (compilation) => {
      compilation.hooks.afterProcessAssets.tap("asset-json-plugin", () => {
        const sourceToAsset = {};
        for (const [k, v] of compilation.assetsInfo) {
          const source = v.sourceFilename;
          if (source) {
            sourceToAsset[source] = k;
          }
        }
        compilation.emitAsset(
          "source-to-asset.json",
          new RawSource(JSON.stringify(sourceToAsset))
        );
      });
    });
  }
}

module.exports = AssetJsonPlugin;
