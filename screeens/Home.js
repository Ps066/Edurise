import { View, Text } from 'react-native'
import React from 'react'
import { Container,Card,Userinfo,Dp,Username ,Userinfotext,Org,Posttext,Postimg,InteractionWrapper,Interactions,
InteractionText} from '../styles/home_styles'
import { authentication } from '../firebase'
import { user } from '../firebase'

import IonIcon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <ScrollView>
    <Container>
    <Card>
      <Userinfo>
        <Dp source={require('../assets/sjcem.jpg')} />
        <Userinfotext>
        <Username>SJCEM Official</Username>
        <Org>St John College of Engineering and Management</Org>
        </Userinfotext>
      </Userinfo>
      <Posttext>University Exam Time-Table for SE,TE&BE is out!!! Students can check there mail box for hall tickets.
</Posttext>
      {/* <Postimg source={require('../assets/SIH.jpg')}/> */}
      <InteractionWrapper>
        <Interactions>
        <IonIcon name="heart-outline" size={25}/>
        <InteractionText>Like</InteractionText>
        </Interactions>
        <Interactions>
        <IonIcon name="md-chatbubble-outline" size={25}/>
        <InteractionText>Comment</InteractionText>
        </Interactions>
      </InteractionWrapper>
      </Card>
    <Card>
      <Userinfo>
        <Dp source={require('../assets/sjcem.jpg')} />
        <Userinfotext>
        <Username>Departement of Computer Engineering</Username>
        <Org>St John College of Engineering and Management</Org>
        </Userinfotext>
      </Userinfo>
      <Posttext>Hackathons are where your crazy idea becomes a reality – Alex Kern, Hacker.🌐
St. John College of Engineering and Management proudly announces its Internal Institute-Level Hackathon for Smart India Hackathon (SIH) 2022 on May 28, 2022 (Monday) from 11.00 a.m. to 4.00 p.m.💥

Participate and be a part of the nation's biggest and most prestigious Hackathon.💯
</Posttext>
      <Postimg source={require('../assets/SIH.jpg')}/>
      <InteractionWrapper>
        <Interactions>
        <IonIcon name="heart-outline" size={25}/>
        <InteractionText>Like</InteractionText>
        </Interactions>
        <Interactions>
        <IonIcon name="md-chatbubble-outline" size={25}/>
        <InteractionText>Comment</InteractionText>
        </Interactions>
      </InteractionWrapper>
      </Card>
      <Card>
      <Userinfo>
        <Dp source={require('../assets/sjcem.jpg')} />
        <Userinfotext>
        <Username>SJCEM Official</Username>
        <Org>St John College of Engineering and Management</Org>
        </Userinfotext>
      </Userinfo>
      <Posttext>Tommrow on 10th April there will be Holiday on auspicious occasion of Ramnavmi.
</Posttext>
      {/* <Postimg source={require('../assets/SIH.jpg')}/> */}
      <InteractionWrapper>
        <Interactions>
        <IonIcon name="heart-outline" size={25}/>
        <InteractionText>Like</InteractionText>
        </Interactions>
        <Interactions>
        <IonIcon name="md-chatbubble-outline" size={25}/>
        <InteractionText>Comment</InteractionText>
        </Interactions>
      </InteractionWrapper>
      </Card>
    </Container>
    </ScrollView>
  )
}

export default Home