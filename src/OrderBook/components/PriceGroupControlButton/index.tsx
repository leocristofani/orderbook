import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from "@material-ui/core";

export interface Props {
  title: TooltipProps["title"];
  onClick: IconButtonProps["onClick"];
  children: IconButtonProps["children"];
}

export default function PriceGroupControlButton({
  title,
  onClick,
  children,
}: Props) {
  return (
    <Tooltip title={title}>
      <IconButton size="small" color="primary" onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
}