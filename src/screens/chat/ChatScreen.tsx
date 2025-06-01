import { Link } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";


const ChatScreen: React.FC = () => {
    return (
      <View>
        <Text>ChatScreen</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          accusantium quidem atque quod temporibus modi ullam perferendis
          explicabo minima officia reiciendis, esse tempora iure autem optio
          excepturi vero recusandae numquam rem sequi mollitia. Voluptatem non
          odit assumenda autem magni amet iste at, eaque placeat sit veniam
          tempore doloremque alias neque rem dolor quas maxime quo vero, velit
          exercitationem qui ipsa ratione expedita! Reiciendis totam molestiae
          magni eaque sint quam sunt nihil amet, cum consectetur accusamus
          provident ab, praesentium nam ex magnam unde, porro dolor repellendus?
          Consequatur
        </Text>
        <Link screen="Setting">Setting</Link>
      </View>
    );
}

export default ChatScreen;