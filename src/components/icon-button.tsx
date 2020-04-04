import { jsx } from "@emotion/core";
import theme from "../theme";
import { IconDefinition } from "@ant-design/icons-svg/lib/types";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";

interface IconButtonProps {
  iconModel: [string, IconDefinition];
}

function IconButton({ iconModel }: IconButtonProps) {
  const [moduleName, icon] = iconModel;
  return (
    <button
      key={moduleName}
      aria-label={moduleName}
      onClick={() =>
        parent.postMessage({ pluginMessage: { type: moduleName } }, "*")
      }
      css={{
        padding: theme.space[2],
        color: "#333",
        background: "transparent",
        border: 0,
        borderRadius: theme.radii[1],
        appearance: "none",
        outline: 0,
        "&:hover": {
          background: "rgba(0, 0, 0, 0.06)",
        },
        "&:focus, &:active": {
          boxShadow: `inset 0 0 0 2px ${theme.colors.blue}`,
        },
      }}
      dangerouslySetInnerHTML={{
        __html: renderIconDefinitionToSVGElement(icon),
      }}
    />
  );
}

export default IconButton;
