import BannerTitle from "./BannerTitle";
import BannerVideo from "./BannerVideo";

const BannerHead = ({ bannerData }) => {
  return (
    <>
      <BannerTitle
        title={bannerData.original_title}
        description={bannerData.overview}
      />
      <BannerVideo moviesID={bannerData.id} />
    </>
  );
};

export default BannerHead;
