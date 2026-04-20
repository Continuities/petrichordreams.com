# petrichordreams.com

A website with ecommerce backed by Stripe.

## Products

Products created in Stripe will appear automatically in the store. Primary image, name, and description will be come from the related fields in the Stripe Product. Optional additional information can be set via Stripe Product metadata as follows:

| Metadata | Description |
| -------- | ----------- |
|name_[locale]|localised name|
|description_[locale]|localised description|
|mood_[locale]|localised mood text|
|story[num]_[locale]|localised story paragraphs|
|images|comma-separated list of additional image URIs|
|height_cm| piece height in cm|
|width_cm| piece width in cm|
|ring_size| ring size |
|band_width_mm| ring band width in mm|
|setting_width_mm| ring setting width in mm|

## Developing

```sh
npm install
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
