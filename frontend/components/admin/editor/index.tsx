import * as React from "react";
import dynamic from "next/dynamic";
import EditorJS, { OutputData } from "@editorjs/editorjs";

import styles from "./style.module.scss";

interface Props {
  content: OutputData;
  onInit: React.Dispatch<React.SetStateAction<EditorJS>>;
}

const EditorComponent = dynamic(() => import("react-editor-js"), {
  ssr: false,
});

const Editor: React.FC<Props> = (props) => {
  const { content, onInit } = props;

  const EDITOR_TOOLS = {
    checklist: require("@editorjs/checklist"),
    code: require("@editorjs/code"),
    delimiter: require("@editorjs/delimiter"),
    embed: require("@editorjs/embed"),
    header: require("@editorjs/header"),
    image: require("@editorjs/image"),
    inlineCode: require("@editorjs/inline-code"),
    linkTool: require("@editorjs/link"),
    list: require("@editorjs/list"),
    marker: require("@editorjs/marker"),
    paragraph: require("@editorjs/paragraph"),
    quote: require("@editorjs/quote"),
    raw: require("@editorjs/raw"),
    simpleImage: require("@editorjs/simple-image"),
    table: require("@editorjs/table"),
    warning: require("@editorjs/warning"),
  };

  return (
    <div className={styles.editor}>
      <EditorComponent
        data={content}
        instanceRef={(instance) => onInit(instance)}
        placeholder="Let's write something awesome!"
        tools={EDITOR_TOOLS}
      />
    </div>
  );
};

export { Editor };
