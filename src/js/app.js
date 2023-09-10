import IFrameHandler from "./engine/IFrameHandler";

function app() {
  const iFrameHandler = new IFrameHandler();
  iFrameHandler.init();
}

app();

export default app;
