import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import repositories from '../data/repositories.js'

const RepositoryList = () =>{
    return(
        <FlatList 
        data={repositories}
        renderItem={({item: resp})=>(
            <View key={resp.id}>
                <Image  style={styles.image}
                        source={resp.partner}/>
                <Text>id: {resp.id}</Text>
                <Text>Nombre: {resp.name}</Text>
                <Text>Cumpleaños: {resp.birthdate}</Text>
                <Text>Plan: {resp.group}</Text>
                <Text>Admisión: {resp.dataAdmission}</Text>
                <Text>Costo: {resp.cost}</Text>
                <Text></Text>
            </View>
        )}
        />
    );

}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
    // Otros estilos que desees aplicar
});

export default RepositoryList;