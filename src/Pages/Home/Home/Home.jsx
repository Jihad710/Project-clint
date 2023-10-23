
import Banner from "../Banner/Banner";
import DayClasses from "../DayClasses/DayClasses";
import Description from "../Description/Description";
import Information from "../Information/Information";
import ManagePlan from "../ManagePlan/ManagePlan";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";



const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Description></Description>
            
            <Information></Information>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <DayClasses></DayClasses>
            <ManagePlan></ManagePlan>
            
        </div>
    );
};

export default Home;