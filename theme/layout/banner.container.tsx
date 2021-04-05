import clsx from "clsx";

const BannerContainer = ({ id, children }: { id?: string; children?: any }) => {
  return <div id={clsx("banner-container", id)}> {children}</div>;
};

export default BannerContainer;
