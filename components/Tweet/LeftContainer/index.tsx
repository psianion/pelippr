import React from 'react';
import { View } from "react-native";

import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

export type LeftContainerProps = {
 user: UserType,
}

const LeftContainer = ({user}: LeftContainerProps) => (
    <View>
        {/* LeftContainer */}
        <ProfilePicture image={user.image} size={60}/>
    </View>
)

export default LeftContainer;