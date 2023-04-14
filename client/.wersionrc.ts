import { WersionConfigModel } from "@weichwarenprojekt/wersion/src/models/wersion-config.model";

  export const configuration: Partial<WersionConfigModel> = {
    versionFile: {
        path: "./package.json",
        matcher: "\"version\": ?\"((0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?)\"",
    },
    commitTypes: {
        major: [],
        minor: ["feat"],
        patch: ["fix"]
    },
    breakingChangeTrigger: "breaking change",
    changelogFilePath: "./CHANGELOG.md",
    projectName: "client",
  };