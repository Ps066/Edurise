import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import { Container, Profile , Attendance, Results,Heading,Heading2,Header,Dp,Userinfo,Userinfotext,Org,Username,Datatype,Data,Datatype2} from '../styles/Mis_styles'




const Mis = () => {
  return (
    <ScrollView style={styles.background}>
      <Container>
        <Profile>
        <Heading>Student Profile</Heading>
        <Userinfo>
          <Dp source={require('../assets/test-user.png')}/>
          <Userinfotext>
            <Username>Shukla Prashant Arbindkumar</Username>
            <Org>LDAP User ID:- 120prashant2061</Org>
          </Userinfotext>

        </Userinfo>
        <Userinfo>
          <Datatype>PID No:- </Datatype>
          <Data>EU1202061</Data>
          <Datatype2>DOB:- </Datatype2>
          <Data>12/06/2002</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>Current Semester:- </Datatype>
          <Data>4</Data>
          <Datatype2>Blood Group:- </Datatype2>
          <Data>B+</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>Branch:- </Datatype>
          <Data>Computer</Data>
          <Datatype2>Gender:- </Datatype2>
          <Data>Male</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>Division:- </Datatype>
          <Data>B</Data>
          <Datatype2>Roll no:- </Datatype2>
          <Data>45</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>Admission in Academic Year:- </Datatype>
          <Data>2020</Data>
          {/* <Datatype2>Roll no:- </Datatype2>
          <Data>45</Data> */}
        </Userinfo>
        <Userinfo>
          <Datatype>Phone no:- </Datatype>
          <Data>9860123700</Data>
          <Datatype>   Natonality:- </Datatype>
          <Data>Indian</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>Email:- </Datatype>
          <Data>prashantshukla0666@gmail.com</Data>
        </Userinfo>
        </Profile>
        <Attendance>
        <Heading>Attendance record</Heading>
        <Userinfo>
          <Datatype>Overall Attendance:- </Datatype>
          <Header>100%</Header>
        </Userinfo>
        <Userinfo>
          <Datatype>AOA:- </Datatype>
          <Data>100%</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>OS:- </Datatype>
          <Data>100%</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>Mp:- </Datatype>
          <Data>100%</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>DBMs:- </Datatype>
          <Data>100%</Data>
        </Userinfo>
        <Userinfo>
          <Datatype>EM-IV:- </Datatype>
          <Data>100%</Data>
        </Userinfo>
        </Attendance>
        <Results>
        <Header>
        <Heading>Results</Heading>
        </Header>
        <Heading2>Internal Exam</Heading2>
        <Userinfo>
          <Datatype>OS(IAT-1):- </Datatype>
          <Data>16</Data>
          
        </Userinfo>
        <Userinfo>
        <Datatype>AOA(IAT-1):- </Datatype>
          <Data>16</Data>
        </Userinfo>
        <Heading2>External Exam</Heading2>
        <Userinfo>
        <Datatype>SEM-1:- </Datatype>
          <Data>96%</Data>
        </Userinfo>
        <Userinfo>
        <Datatype>SEM-2:- </Datatype>
          <Data>88%</Data>
        </Userinfo>
        <Userinfo>
        <Datatype>SEM-3:- </Datatype>
          <Data>84%</Data>
        </Userinfo>
        </Results>
      </Container>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#fff'
  }
})

export default Mis