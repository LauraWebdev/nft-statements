# NFTstatements
A public list of projects, companies and individuals and their stance on NFTs.

---

## Overview
- Adding an entry
- Project setup & local serving
- Linting

## Adding an entry
To add a new entry, create a new json file in `public/content/` where the filename is a slug of the project (For example: `epic-games-store` for `Epic Games Store`).

Add the slug to the `index.json` file to display it in the table.

The entry json file has a few properties that have to be set.

| Property | Type | Required | Explaination |
| -------- | ---- | -------- | ------------ |
| project | String | Yes | The individual that gave the statement. If no individual person can be credited, use the company name here. |
| company | String | Yes | The company that gave the statement. |
| project | String | Yes | The project the statement was about. If no individual project was named, use the company name here. |
| when | Unix Timestamp | Yes | The timestamp of the statement. |
| nftStance.interested | Boolean | Yes | Is this entry "interested" in NFT projects, called it the "future" of the digital world and/or announced future plans including NFT content? |
| nftStance.involved | Boolean | Yes | Is this entry involved in an existing NFT project or created their own? |
| nftStance.quote | String | Yes | A direct quote of the statement about NFTs |
| sources | String Array | Yes | URLs to sources. Include at least the primary source or a reputable news article that includes direct quotes of the statement. |

## Project setup & local serving
First, install npm and run the following command, to install all dev dependencies.
```shell
yarn install
```

After that, you may run the following command to start up a development server with hot-reloading
```shell
yarn serve
```

If you want to compile the project for a production environment, you may run the following command:
```shell
yarn build
```

### Lints and fixes files
Our project includes linting rules. To lint your current code, run the following command:
```shell
yarn lint
```

You can also run the following command to automatically fix all linting issues:
```shell
yarn lint --fix
```
