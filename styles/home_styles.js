import styled from 'styled-components';

export const Container = styled.View`

    background-color: #fff;
    flex: 1;
    padding: 20px;
    align-items : center;


`;
export const Card=styled.View`
    background-color: #e6e6e6;
    width:100%;
    margin-bottom:20px;
    border-radius:10px;
     /* margin-left:10px; */
     /* #f8f8f8  #ccffe6*/


`;

export const Userinfo=styled.View`
    flex-direction:row;
    justify-content:flex-start;
    padding:15px;

`;
export const Dp =styled.Image`
    width: 60px;
    height:60px;
    border-radius:35px;

`;
export const Userinfotext =styled.View`
    flex-direction:column;
    justify-content: center;
    margin-left:10px;



`;
export const Username = styled.Text`
    font-size:14;
    font-weight:bold;
    
    
`;
export const Org=styled.Text`
    font-size:10px;
    color:#666;

`;

export const Posttext=styled.Text`
     font-size:14;
     padding-left:15px;
     padding-right:15px;
`;

export const Postimg=styled.Image`
    width:100%;
    height:250px;
    margin-top:15px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding:15px;
`;

export const Interactions = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius:5px;
    padding: 2px 5px;
`;
export const InteractionText = styled.Text`
    font-size:12px;
    font-weight:bold;
    color:#333;
    margin-top:5px;
    margin-left:5px;

`