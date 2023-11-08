import { useLoaderData, useParams } from "react-router-dom";


const BrowseCategorySet = () => {
    const job = useLoaderData();
    const{category} = useParams();
    console.log(category);
    return (
        <div>
            
        </div>
    );
};

export default BrowseCategorySet;