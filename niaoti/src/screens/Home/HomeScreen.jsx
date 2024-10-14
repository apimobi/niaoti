import BlocCard from "../../components/home/BlocCard";
import FeaturesGrid from "../../components/home/FeaturesGrid";
import { FEATURES_DATA_LUXE } from "../../data/mockData";
import { FEATURES_DATA_COSMETIC } from "../../data/mockData";
import { FEATURES_DATA_AUTOMOTIVE } from "../../data/mockData";
import { FEATURES_DATA_ECOMMERCE } from "../../data/mockData";
import { FEATURES_DATA_MOBILE_APPLICATION } from "../../data/mockData";
import { FEATURES_DATA_DESIGN } from "../../data/mockData";
import BlocApp from "../../components/home/BlocApp";

const HomeScreen = ({setDialogType, setIsOpen, setData}) => {
    console.log(setDialogType);
    return (
      <div>
        <BlocCard hashId="luxe" data={FEATURES_DATA_LUXE} title="LUXE" />
        <BlocCard hashId="design" data={FEATURES_DATA_DESIGN} title="DESIGN" />
        <BlocApp hashId="mobile-application" data={FEATURES_DATA_MOBILE_APPLICATION} title="Mobile Applications" />
        <BlocCard hashId="cosmetics" data={FEATURES_DATA_COSMETIC} title="COSMETICS" />
        <BlocCard hashId="automotive" data={FEATURES_DATA_AUTOMOTIVE} title="AUTOMOTIVE" />
        <BlocCard hashId="ecommerce" data={FEATURES_DATA_ECOMMERCE} title="ECOMMERCE" />
      </div>
    );
  }
  
export default HomeScreen;