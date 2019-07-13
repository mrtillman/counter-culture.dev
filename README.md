# counter-culture.dev

A developer site for [counter-culture.io](https://counter-culture.io).

---
<!--
[![Build Status](https://travis-ci.com/mrtillman/counter-culture.app.svg?branch=master)](https://travis-ci.com/mrtillman/counter-culture.app)
[![Coverage Status](https://coveralls.io/repos/github/mrtillman/counter-culture.app/badge.svg?branch=master)](https://coveralls.io/github/mrtillman/counter-culture.app?branch=master)
-->

## Getting Started

Counter-culture.dev is a first-party OAuth 2.0 client application that consumes [counter-culture.client](https://github.com/mrtillman/counter-culture.client). It was designed to provide application developers with resources to learn, build and deploy third-party 0Auth 2.0 client applications for [counter-culture.io](https://counter-culture.io).

### Prerequisites 

Counter-culture.dev relies on [counter-culture.api](https://github.com/mrtillman/counter-culture.api) and [counter-culture.secure](https://github.com/mrtillman/counter-culture.secure). When started in `development` mode, counter-culture.app points to http://localhost:4000 and http://localhost:5000. So, when in development mode be sure to start counter-culture.api and counter-culture.secure on ports `4000` and `5000`, respectively (see [Environment Modes](https://github.com/mrtillman/counter-culture.client#environment-modes)).

### Installation

```sh
# clone the repo
git clone https://github.com/mrtillman/counter-culture.dev.git

# enter project root
cd counter-culture.dev

# install dependencies
npm install

# let it rip
npm run dev
```

## Usage

Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

## License
[MIT](https://github.com/mrtillman/counter-culture.dev/blob/master/LICENSE.md)