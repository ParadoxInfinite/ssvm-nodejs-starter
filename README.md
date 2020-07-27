# Rust functions in node.js

This is a repository forked from [Second State's GitHub page](https://github.com/second-state/ssvm-nodejs-starter).
I have modified the code to find details of a given number using 3 languages and compare their results + execution time.

##### Note : I cannot assure 100% accuracy on the timing measure for Rust as I'm still learning, but I have utilized the best method I could find.

## Getting started

[Fork this project](https://github.com/ParadoxInfinite/ssvm-nodejs-starter/fork) to create your own Rust functions in Node.js. [Learn more at Second State!](https://www.secondstate.io/articles/getting-started-rust-nodejs-vscode/)

- The Rust functions are in the `src` directory. You can put high performance workload into Rust functions.
- The JavaScript functions are in the `node` directory and they can access the Rust functions.
- Use the `node node/app.js` command to run the application in Node.js.

## Use Docker to build and run

```
$ docker build -t ssvm-nodejs:v1 .
$ docker run -p 3000:3000 --rm -it -v $(pwd):/app ssvm-nodejs:v1
(docker) # cd /app
(docker) # ssvmup build
(docker) # node node/app.js
```

Open your browser, head to http://localhost:3000/ and enter an integer to get some details about that number.

## Read more:

- [The Case for WebAssembly on the Server-side](https://www.secondstate.io/articles/why-webassembly-server/)
- [Guide on how to Rust and WebAssembly for server-side apps](https://www.secondstate.io/articles/getting-started-with-rust-function/)

## Resources

- [The Second State VM (SSVM)](https://github.com/second-state/ssvm) is a high performance [WebAssembly virtual machine](https://www.secondstate.io/ssvm/) designed for server-side applications.
- [The SSVM NPM addon](https://github.com/second-state/ssvm-napi) provides access to the SSVM, and programs in it, through a Node.js host application.
- [The SSVM ready tool, ssvmup](https://github.com/second-state/ssvmup) is a [toolchain](https://www.secondstate.io/articles/ssvmup/) for compiling Rust programs into WebAssembly, and then make them accessible from JavaScripts via the SSVM.

Brought to you by the Open source dev team at [Second State](https://www.secondstate.io/). Follow us on [Twitter](https://twitter.com/secondstateinc), [Facebook](https://www.facebook.com/SecondState.io/), [LinkedIn](https://www.linkedin.com/company/second-state/), [YouTube](https://www.youtube.com/channel/UCePMT5duHcIbJlwJRSOPDMQ), or [Medium](https://medium.com/wasm)
