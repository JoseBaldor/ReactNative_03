import { Text, StyleSheet } from "react-native";
import theme from '../theme.js';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    colorblue:{
        color: theme.colors.textBlue
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading:{
        fontSize: theme.fontSizes.subHeading
    },
    min:{
        fontSize: theme.fontSizes.min
    }
});

const StyledText = ({children, color, fontSize, fontWeight, style, ...restOfProps}) =>{
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'blue' && styles.colorblue,
        fontSize === 'subHeading' && styles.subHeading,
        fontSize === 'min' && styles.min,
        fontWeight === 'bold' && styles.bold
    ];

    return(
        <Text style = {textStyles} {...restOfProps}>
            {children}
        </Text>
    );

}

export default StyledText;