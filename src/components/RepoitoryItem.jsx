import { View, Text, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText";

const RepositoryItem = (props) =>{
    return(
        <View key={props.id} style={styles.container}>
            <Image  style={styles.image}
                    source={props.partner}/>
            <StyledText fontSize='subHeading' color='blue' fontWeight='bold'>id: {props.id}</StyledText>
            <StyledText fontWeight='bold'>Nombre: {props.name}</StyledText>
            <StyledText fontSize='min'>Cumpleaños: {props.birthdate}</StyledText>
            <StyledText
        >Plan: {props.group}</StyledText>
            <StyledText>Admisión: {props.dataAdmission}</StyledText>
            <StyledText color='blue'>Costo: {props.cost}</StyledText>
            <StyledText>Prueba</StyledText>
            <StyledText>Texto de Prueba 2</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    // Otros estilos que desees aplicar
});

export default RepositoryItem;