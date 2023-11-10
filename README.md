<p align="center">
  <img src="public/logo.svg" height="128">
  <h2 align="center"><a href="https://choose-tech.com">Choose Tech</a></h2>
  <p align="center">Hand-picked comparisons for your next project.<p>
</p>

<hr />

Choose Tech is a free and open-source resource portal to help devs pick the right tech for their next project.

Choose Tech provides tooling for the community to create comparisons and keep them up to date. It's all made posible by our [Astro integration](https://github.com/choose-tech/astro-integration).

## Features

- Great tooling to manage comparisons and resources with almost no boilerplate
- Filtering
- Sorting (soon)
- Progressively enhanced UI powered by [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Icons through [iconify](https://iconify.design/)

## Contributing

You want to help? There is stuff to tackle for sure!

- **Maintain a comparison:** Review PRs and issues
- **Create a new comparison:** Open an issue on this repo
- **Add resources:** Follow the guide on any comparison's README
- **Keep resources up to date:** logos change, maybe there's a better way of categorizing
- **Update choose-tech.com:** Feel free to open an issue if you have an idea
- **Update the comparator:** There are many things we'd love to do, have a look at the [repo](https://github.com/choose-tech/astro-integration)

## Development

To run this website locally, you'll need [Node.js](https://nodejs.org/) `18.14.1`. We recommend using something like `nvm` to manage node versions. Once installed, enable Corepack using `corepack enable`. It will install PNPM for you.

Start by installing the dependencies with `pnpm i --frozen-lockfile`, then start the local server with `pnpm dev`. That's it!

It's a standard [Astro](https://astro.build/) website, have a look at their [docs](https://docs.astro.build/) if you need more info!

## Credits and inspiration

- [UI Lib Picker](https://github.com/ddahan/ui-libs)
- [nuxt.com](https://nuxt.com) for the hero design
- [Nuxt modules](https://nuxt.com/modules), [Astro integrations](https://astro.build/integrations/) and [RégioLangues](https://www.regiolangues.fr/) for the resources design

## License

Published under [MIT License](./LICENSE).
