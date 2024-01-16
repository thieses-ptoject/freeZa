import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Pressable, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getTypes } from '../../React-query/homeProducts/products';
import { AuthContext } from '../../useContext/authContext';

export const Types = ({ data, onClose, setView, categoryId }: any) => {
    // const {data: types, isLoading, isError} = getTypes()
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const translateY = useRef(new Animated.Value(Dimensions.get('window').height)).current;
    const [view,setVieww] = useState(false)
    const {types} =useContext(AuthContext)
    const [selectedType, setSelectedType] = useState<number | null>(null);
    const {setFilteredProducts}  = useContext(AuthContext)

    console.log(types);
    const slideUp = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
            slideUp();
        
      },[]);
    const handleItemPress = (index: number) => {
        setSelectedItem(selectedItem === index ? null : index);
    };
    const filteredData = selectedType
    ? data.filter((item: any) => item.typeId === selectedType)
    : data;


        console.log(filteredData, "llllllllllllll")
    return (
        <Animated.View style={{ ...styles.bigContainer, transform: [{ translateY }] }}>
            <View style={styles.bigContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Types: </Text>
                    <TouchableOpacity onPress={onClose}>
                        <Pressable onPress={()=>setView(false)}>
                            <Ionicons style={{marginLeft: "1.5%",marginRight: "1.5%"}} name="ios-close" size={24} color="green" />
                        </Pressable>
                    </TouchableOpacity>
                </View>
                {filteredData?.map((ele: any, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.typeContainer}
                            onPress={() =>{ 
                                setView(false)
                                handleItemPress(ele.typeId)
                                
                            }
                                
                            }
                        >
                            <Text style={styles.text}>
                                {ele.type}
                            </Text>
                            <View style={styles.iconContainer}>
                                <Ionicons name="chevron-forward-outline" size={24} color="green" />
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 8,
        color: "green",
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
        marginLeft: "1%",
        marginRight: "2.5%",
    },
    iconContainer: {
        marginLeft: 10,
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
