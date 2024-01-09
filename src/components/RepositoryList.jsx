import { FlatList } from "react-native";
import repositories from '../data/repositories.js'
import RepositoryItem from "./RepoitoryItem.jsx";

const RepositoryList = () =>{
    return(
        <FlatList 
        data={repositories}
        renderItem={({item: resp})=>(
            <RepositoryItem {...resp}/>
        )}
        />
    );

}


export default RepositoryList;