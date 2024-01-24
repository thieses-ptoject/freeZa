import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Pressable, ActivityIndicator, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../useContext/authContext';

export const OthersType = ({ onClose, setView }: any) => {
    const { categories, categoriesLoading, categoryError } = useContext(AuthContext);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [categoryStates, setCategoryStates] = useState<{ [key: number]: boolean }>({});
    const translateY = useRef(new Animated.Value(Dimensions.get('window').height)).current;
    const {products ,  setFilteredProducts} = useContext(AuthContext)

    const slideUp = () => {
        Animated.timing(translateY, {
            toValue: -130,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    if (categoriesLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#FC5A8D" />
            </View>
        );
    }

    if (categoryError) {
        return (
            <View>
                <Text>Error fetching user data</Text>
            </View>
        );
    }

    useEffect(() => {
        slideUp();
    }, []);

    const handleCategoryPress = (index: number) => {
        setSelectedItem(selectedItem === index ? null : index);
        setCategoryStates({ ...categoryStates, [index]: !categoryStates[index] });
    };
    const handleTypePress = (index: number) => {
        const filtered = products.filter((element : any)=>{
            return element.typeId === index
        })
        console.log(products , "products jsqdjklsqd")
        console.log(filtered, "rrrrrrrrrrrrrrrrr")
    return setFilteredProducts(filtered)
    };


    return (
        <Animated.View style={{ ...styles.bigContainer, transform: [{ translateY }] }}>
            <View style={styles.bigContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Categories: </Text>
                    <TouchableOpacity onPress={onClose}>
                        <Pressable onPress={() => setView(false)}>
                            <Ionicons style={{ marginLeft: "1.5%", marginRight: "1.5%" }} name="ios-close" size={24} color="#000" />
                        </Pressable>
                    </TouchableOpacity>
                </View>
                
                {categories?.map((category: any, index: number) => (
                    <View key={index}>
                        <TouchableOpacity
                            style={styles.categoryContainer}
                            onPress={() =>{ 
          
                                handleCategoryPress(index)}}
                            >
                        <View style ={styles.iconContainer}>
                            <Image
                            style= {styles.categoryIcon}
                            source={{ uri: category.image }}
                                                />
                        </View>
                            <Text style={styles.text}>
                                {category.name}
                            </Text>
                            <View style={styles.arrowContainer}>
                                <Ionicons style ={styles.arrowIcon} name="chevron-down-outline" size={24} color="#000" />
                            </View>
                        </TouchableOpacity>
                        {categoryStates[index] &&
                            <View style = {styles.bigTypeContainer}>
                                {category.Types.map((type: any, typeIndex: number) => (
                                    <Pressable onPress={()=>{
                                        console.log(setView)
                                        setView(false)
                                        handleTypePress(type.id)
                                    }}>
                                        <View key={typeIndex} style={styles.typeContainer}>
                                            <Text style={styles.typeText}>
                                                {type.type}
                                            </Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        }
                    </View>
                ))}
            </View>
        </Animated.View>
    );
};


const styles = StyleSheet.create({
    categoryContainer: {
        
        width: "100%",
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginLeft: "1%",
       
    },
    arrowIcon:{
        
    },
    arrowContainer:{
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    typeText:{
            
    },
    categoryIcon :{
        height: 30,
        width: 30,
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: "20%"
        },  
    typeContainer: {
        padding: 5,
        margin: 5,
        fontSize: 17,
        borderWidth: 1,
        borderRadius: 15,
    },
    bigTypeContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: 10, // Adjust the margin as needed
    },
    text: {
        marginLeft: 5,
        fontSize: 18,
        padding: 8,
        color: "red",
        width: "74%"
    },
    iconContainer: {
        marginLeft: 10,
        justifyContent: "flex-end",
        borderWidth: 1,
        borderRadius: 30,
        height: 50,
        
        width: 50,
    },
    bigContainer: {
        backgroundColor: "#fff",
        height: "100%",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: "1%"
    },
});

