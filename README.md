# Warnings

You can see warnings in console in project view.

```
Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq simpleWorker.js:18
You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker
```

According to [monaco readme](https://github.com/microsoft/monaco-editor#faq)

> Language services create web workers to compute heavy stuff outside of the UI thread. [...] HTML5 does not allow pages loaded on file:// to create web workers.

Since monaco is used just to process markdown (so i guess there will bot be "heavy stuff") here and is supposed to be used on localhost anyway i decided to ignore this messages.
