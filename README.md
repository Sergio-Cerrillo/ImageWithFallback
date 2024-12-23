### Image Component 

This component is designed to use an Image component while avoiding loading errors. First, a src must be passed as a required prop. If it fails, it will automatically fallback to a static image that we have predefined in the component.

The option to add a srcFallback as a secondary resource has also been enabled in case the main src fails. If both are provided and both fail, the static image will be displayed.

##
The component first uses the "src" source. If it fails, it can optionally fall back to "srcFallback". If neither source is available, a static image stored in the project will be displayed automatically.
While the images are loading, the Skeleton component (without dependencies) will appear.