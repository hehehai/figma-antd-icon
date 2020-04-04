import * as antdIcons from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.onmessage = (message) => {
  console.log(message);
  const icon = figma.createNodeFromSvg(
    renderIconDefinitionToSVGElement(Object(antdIcons)[message.type])
  );
  icon.name = message.type;
  icon.x = figma.viewport.center.x;
  icon.y = figma.viewport.center.y;
  figma.currentPage.selection = [icon];
};
